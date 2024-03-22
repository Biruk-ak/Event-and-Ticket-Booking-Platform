import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Calendar } from './calendar.entity';
import { CreateCalendarDto, UpdateCalendarDto, QueryCalendarDto } from './calendar.dto';

@Injectable()
export class CalendarService {
  private readonly logger = new Logger(CalendarService.name);

  constructor(
    @InjectRepository(Calendar)
    private readonly repo: Repository<Calendar>,
  ) {}

  async create(dto: CreateCalendarDto): Promise<Calendar> {
    this.logger.log(`Creating Calendar`);
    const entity = this.repo.create(dto as Partial<Calendar>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Calendar ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryCalendarDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Calendar> = {};
    const [items, total] = await this.repo.findAndCount({
      where,
      skip: (page - 1) * limit,
      take: limit,
      order: { [query.sortBy || 'createdAt']: query.sortOrder || 'DESC' } as any,
    });
    return {
      items: items.map((i) => i.toPublic()),
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  async findOne(id: string): Promise<Calendar> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Calendar ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateCalendarDto): Promise<Calendar> {
    const entity = await this.findOne(id);
    if (dto.userId !== undefined) entity.userId = dto.userId;
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.title !== undefined) entity.title = dto.title;
    if (dto.startsAt !== undefined) entity.startsAt = dto.startsAt;
    if (dto.endsAt !== undefined) entity.endsAt = dto.endsAt;
    if (dto.remindAt !== undefined) entity.remindAt = dto.remindAt;
    if (dto.source !== undefined) entity.source = dto.source;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Calendar ${id}`);
  }

  async bulkCreate(dtos: CreateCalendarDto[]): Promise<Calendar[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Calendar>[]);
    return this.repo.save(entities);
  }

  async count(): Promise<number> {
    return this.repo.count();
  }

  async exists(id: string): Promise<boolean> {
    const n = await this.repo.count({ where: { id } });
    return n > 0;
  }
}

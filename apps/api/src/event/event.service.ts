import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto, UpdateEventDto, QueryEventDto } from './event.dto';

@Injectable()
export class EventService {
  private readonly logger = new Logger(EventService.name);

  constructor(
    @InjectRepository(Event)
    private readonly repo: Repository<Event>,
  ) {}

  async create(dto: CreateEventDto): Promise<Event> {
    this.logger.log(`Creating Event`);
    const entity = this.repo.create(dto as Partial<Event>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Event ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryEventDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Event> = {};
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

  async findOne(id: string): Promise<Event> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Event ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateEventDto): Promise<Event> {
    const entity = await this.findOne(id);
    if (dto.organizerId !== undefined) entity.organizerId = dto.organizerId;
    if (dto.title !== undefined) entity.title = dto.title;
    if (dto.slug !== undefined) entity.slug = dto.slug;
    if (dto.description !== undefined) entity.description = dto.description;
    if (dto.status !== undefined) entity.status = dto.status;
    if (dto.startsAt !== undefined) entity.startsAt = dto.startsAt;
    if (dto.endsAt !== undefined) entity.endsAt = dto.endsAt;
    if (dto.timezone !== undefined) entity.timezone = dto.timezone;
    if (dto.venueName !== undefined) entity.venueName = dto.venueName;
    if (dto.venueAddress !== undefined) entity.venueAddress = dto.venueAddress;
    if (dto.venueCity !== undefined) entity.venueCity = dto.venueCity;
    if (dto.coverImageUrl !== undefined) entity.coverImageUrl = dto.coverImageUrl;
    if (dto.isFeatured !== undefined) entity.isFeatured = dto.isFeatured;
    if (dto.capacity !== undefined) entity.capacity = dto.capacity;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Event ${id}`);
  }

  async bulkCreate(dtos: CreateEventDto[]): Promise<Event[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Event>[]);
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

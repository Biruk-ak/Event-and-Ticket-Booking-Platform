import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Analytics } from './analytics.entity';
import { CreateAnalyticsDto, UpdateAnalyticsDto, QueryAnalyticsDto } from './analytics.dto';

@Injectable()
export class AnalyticsService {
  private readonly logger = new Logger(AnalyticsService.name);

  constructor(
    @InjectRepository(Analytics)
    private readonly repo: Repository<Analytics>,
  ) {}

  async create(dto: CreateAnalyticsDto): Promise<Analytics> {
    this.logger.log(`Creating Analytics`);
    const entity = this.repo.create(dto as Partial<Analytics>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Analytics ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryAnalyticsDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Analytics> = {};
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

  async findOne(id: string): Promise<Analytics> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Analytics ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateAnalyticsDto): Promise<Analytics> {
    const entity = await this.findOne(id);
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.metric !== undefined) entity.metric = dto.metric;
    if (dto.value !== undefined) entity.value = dto.value;
    if (dto.dimensionsJson !== undefined) entity.dimensionsJson = dto.dimensionsJson;
    if (dto.capturedAt !== undefined) entity.capturedAt = dto.capturedAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Analytics ${id}`);
  }

  async bulkCreate(dtos: CreateAnalyticsDto[]): Promise<Analytics[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Analytics>[]);
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

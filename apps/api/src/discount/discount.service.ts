import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Discount } from './discount.entity';
import { CreateDiscountDto, UpdateDiscountDto, QueryDiscountDto } from './discount.dto';

@Injectable()
export class DiscountService {
  private readonly logger = new Logger(DiscountService.name);

  constructor(
    @InjectRepository(Discount)
    private readonly repo: Repository<Discount>,
  ) {}

  async create(dto: CreateDiscountDto): Promise<Discount> {
    this.logger.log(`Creating Discount`);
    const entity = this.repo.create(dto as Partial<Discount>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Discount ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryDiscountDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Discount> = {};
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

  async findOne(id: string): Promise<Discount> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Discount ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateDiscountDto): Promise<Discount> {
    const entity = await this.findOne(id);
    if (dto.code !== undefined) entity.code = dto.code;
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.percentOff !== undefined) entity.percentOff = dto.percentOff;
    if (dto.amountOffCents !== undefined) entity.amountOffCents = dto.amountOffCents;
    if (dto.maxRedemptions !== undefined) entity.maxRedemptions = dto.maxRedemptions;
    if (dto.redemptionCount !== undefined) entity.redemptionCount = dto.redemptionCount;
    if (dto.startsAt !== undefined) entity.startsAt = dto.startsAt;
    if (dto.endsAt !== undefined) entity.endsAt = dto.endsAt;
    if (dto.isActive !== undefined) entity.isActive = dto.isActive;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Discount ${id}`);
  }

  async bulkCreate(dtos: CreateDiscountDto[]): Promise<Discount[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Discount>[]);
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

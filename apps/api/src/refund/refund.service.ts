import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Refund } from './refund.entity';
import { CreateRefundDto, UpdateRefundDto, QueryRefundDto } from './refund.dto';

@Injectable()
export class RefundService {
  private readonly logger = new Logger(RefundService.name);

  constructor(
    @InjectRepository(Refund)
    private readonly repo: Repository<Refund>,
  ) {}

  async create(dto: CreateRefundDto): Promise<Refund> {
    this.logger.log(`Creating Refund`);
    const entity = this.repo.create(dto as Partial<Refund>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Refund ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryRefundDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Refund> = {};
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

  async findOne(id: string): Promise<Refund> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Refund ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateRefundDto): Promise<Refund> {
    const entity = await this.findOne(id);
    if (dto.orderId !== undefined) entity.orderId = dto.orderId;
    if (dto.ticketId !== undefined) entity.ticketId = dto.ticketId;
    if (dto.buyerId !== undefined) entity.buyerId = dto.buyerId;
    if (dto.amountCents !== undefined) entity.amountCents = dto.amountCents;
    if (dto.currency !== undefined) entity.currency = dto.currency;
    if (dto.reason !== undefined) entity.reason = dto.reason;
    if (dto.status !== undefined) entity.status = dto.status;
    if (dto.processedAt !== undefined) entity.processedAt = dto.processedAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Refund ${id}`);
  }

  async bulkCreate(dtos: CreateRefundDto[]): Promise<Refund[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Refund>[]);
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

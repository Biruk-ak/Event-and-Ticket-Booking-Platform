import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto, UpdateOrderDto, QueryOrderDto } from './order.dto';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);

  constructor(
    @InjectRepository(Order)
    private readonly repo: Repository<Order>,
  ) {}

  async create(dto: CreateOrderDto): Promise<Order> {
    this.logger.log(`Creating Order`);
    const entity = this.repo.create(dto as Partial<Order>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Order ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryOrderDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Order> = {};
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

  async findOne(id: string): Promise<Order> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Order ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateOrderDto): Promise<Order> {
    const entity = await this.findOne(id);
    if (dto.buyerId !== undefined) entity.buyerId = dto.buyerId;
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.status !== undefined) entity.status = dto.status;
    if (dto.totalCents !== undefined) entity.totalCents = dto.totalCents;
    if (dto.currency !== undefined) entity.currency = dto.currency;
    if (dto.discountCode !== undefined) entity.discountCode = dto.discountCode;
    if (dto.paidAt !== undefined) entity.paidAt = dto.paidAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Order ${id}`);
  }

  async bulkCreate(dtos: CreateOrderDto[]): Promise<Order[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Order>[]);
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

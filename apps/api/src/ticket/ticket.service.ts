import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Ticket } from './ticket.entity';
import { CreateTicketDto, UpdateTicketDto, QueryTicketDto } from './ticket.dto';

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);

  constructor(
    @InjectRepository(Ticket)
    private readonly repo: Repository<Ticket>,
  ) {}

  async create(dto: CreateTicketDto): Promise<Ticket> {
    this.logger.log(`Creating Ticket`);
    const entity = this.repo.create(dto as Partial<Ticket>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Ticket ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryTicketDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Ticket> = {};
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

  async findOne(id: string): Promise<Ticket> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Ticket ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateTicketDto): Promise<Ticket> {
    const entity = await this.findOne(id);
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.ticketTypeId !== undefined) entity.ticketTypeId = dto.ticketTypeId;
    if (dto.buyerId !== undefined) entity.buyerId = dto.buyerId;
    if (dto.orderId !== undefined) entity.orderId = dto.orderId;
    if (dto.status !== undefined) entity.status = dto.status;
    if (dto.qrPayload !== undefined) entity.qrPayload = dto.qrPayload;
    if (dto.seatLabel !== undefined) entity.seatLabel = dto.seatLabel;
    if (dto.priceCents !== undefined) entity.priceCents = dto.priceCents;
    if (dto.currency !== undefined) entity.currency = dto.currency;
    if (dto.purchasedAt !== undefined) entity.purchasedAt = dto.purchasedAt;
    if (dto.checkedInAt !== undefined) entity.checkedInAt = dto.checkedInAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Ticket ${id}`);
  }

  async bulkCreate(dtos: CreateTicketDto[]): Promise<Ticket[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Ticket>[]);
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

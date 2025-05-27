import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Message } from './message.entity';
import { CreateMessageDto, UpdateMessageDto, QueryMessageDto } from './message.dto';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  constructor(
    @InjectRepository(Message)
    private readonly repo: Repository<Message>,
  ) {}

  async create(dto: CreateMessageDto): Promise<Message> {
    this.logger.log(`Creating Message`);
    const entity = this.repo.create(dto as Partial<Message>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Message ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryMessageDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Message> = {};
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

  async findOne(id: string): Promise<Message> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Message ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateMessageDto): Promise<Message> {
    const entity = await this.findOne(id);
    if (dto.threadId !== undefined) entity.threadId = dto.threadId;
    if (dto.senderId !== undefined) entity.senderId = dto.senderId;
    if (dto.recipientId !== undefined) entity.recipientId = dto.recipientId;
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.body !== undefined) entity.body = dto.body;
    if (dto.isRead !== undefined) entity.isRead = dto.isRead;
    if (dto.sentAt !== undefined) entity.sentAt = dto.sentAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Message ${id}`);
  }

  async bulkCreate(dtos: CreateMessageDto[]): Promise<Message[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Message>[]);
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

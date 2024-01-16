import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Notification } from './notification.entity';
import { CreateNotificationDto, UpdateNotificationDto, QueryNotificationDto } from './notification.dto';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    @InjectRepository(Notification)
    private readonly repo: Repository<Notification>,
  ) {}

  async create(dto: CreateNotificationDto): Promise<Notification> {
    this.logger.log(`Creating Notification`);
    const entity = this.repo.create(dto as Partial<Notification>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Notification ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryNotificationDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Notification> = {};
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

  async findOne(id: string): Promise<Notification> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Notification ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateNotificationDto): Promise<Notification> {
    const entity = await this.findOne(id);
    if (dto.userId !== undefined) entity.userId = dto.userId;
    if (dto.channel !== undefined) entity.channel = dto.channel;
    if (dto.title !== undefined) entity.title = dto.title;
    if (dto.body !== undefined) entity.body = dto.body;
    if (dto.payloadJson !== undefined) entity.payloadJson = dto.payloadJson;
    if (dto.status !== undefined) entity.status = dto.status;
    if (dto.sentAt !== undefined) entity.sentAt = dto.sentAt;
    if (dto.readAt !== undefined) entity.readAt = dto.readAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Notification ${id}`);
  }

  async bulkCreate(dtos: CreateNotificationDto[]): Promise<Notification[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Notification>[]);
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

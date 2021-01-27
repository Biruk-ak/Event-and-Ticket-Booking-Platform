import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto, QueryUserDto } from './user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    this.logger.log(`Creating User`);
    const entity = this.repo.create(dto as Partial<User>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created User ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryUserDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<User> = {};
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

  async findOne(id: string): Promise<User> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const entity = await this.findOne(id);
    if (dto.email !== undefined) entity.email = dto.email;
    if (dto.passwordHash !== undefined) entity.passwordHash = dto.passwordHash;
    if (dto.displayName !== undefined) entity.displayName = dto.displayName;
    if (dto.role !== undefined) entity.role = dto.role;
    if (dto.phone !== undefined) entity.phone = dto.phone;
    if (dto.isVerified !== undefined) entity.isVerified = dto.isVerified;
    if (dto.lastLoginAt !== undefined) entity.lastLoginAt = dto.lastLoginAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed User ${id}`);
  }

  async bulkCreate(dtos: CreateUserDto[]): Promise<User[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<User>[]);
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

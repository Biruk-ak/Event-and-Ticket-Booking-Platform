import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto, UpdateReviewDto, QueryReviewDto } from './review.dto';

@Injectable()
export class ReviewService {
  private readonly logger = new Logger(ReviewService.name);

  constructor(
    @InjectRepository(Review)
    private readonly repo: Repository<Review>,
  ) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    this.logger.log(`Creating Review`);
    const entity = this.repo.create(dto as Partial<Review>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Review ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryReviewDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Review> = {};
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

  async findOne(id: string): Promise<Review> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Review ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateReviewDto): Promise<Review> {
    const entity = await this.findOne(id);
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.authorId !== undefined) entity.authorId = dto.authorId;
    if (dto.rating !== undefined) entity.rating = dto.rating;
    if (dto.title !== undefined) entity.title = dto.title;
    if (dto.body !== undefined) entity.body = dto.body;
    if (dto.isPublished !== undefined) entity.isPublished = dto.isPublished;
    if (dto.moderatedAt !== undefined) entity.moderatedAt = dto.moderatedAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Review ${id}`);
  }

  async bulkCreate(dtos: CreateReviewDto[]): Promise<Review[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Review>[]);
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

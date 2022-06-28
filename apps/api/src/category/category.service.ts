import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto, UpdateCategoryDto, QueryCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  private readonly logger = new Logger(CategoryService.name);

  constructor(
    @InjectRepository(Category)
    private readonly repo: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    this.logger.log(`Creating Category`);
    const entity = this.repo.create(dto as Partial<Category>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Category ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryCategoryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Category> = {};
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

  async findOne(id: string): Promise<Category> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    const entity = await this.findOne(id);
    if (dto.name !== undefined) entity.name = dto.name;
    if (dto.slug !== undefined) entity.slug = dto.slug;
    if (dto.description !== undefined) entity.description = dto.description;
    if (dto.isActive !== undefined) entity.isActive = dto.isActive;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Category ${id}`);
  }

  async bulkCreate(dtos: CreateCategoryDto[]): Promise<Category[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Category>[]);
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

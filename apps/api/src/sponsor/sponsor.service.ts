import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Sponsor } from './sponsor.entity';
import { CreateSponsorDto, UpdateSponsorDto, QuerySponsorDto } from './sponsor.dto';

@Injectable()
export class SponsorService {
  private readonly logger = new Logger(SponsorService.name);

  constructor(
    @InjectRepository(Sponsor)
    private readonly repo: Repository<Sponsor>,
  ) {}

  async create(dto: CreateSponsorDto): Promise<Sponsor> {
    this.logger.log(`Creating Sponsor`);
    const entity = this.repo.create(dto as Partial<Sponsor>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Sponsor ${saved.id}`);
    return saved;
  }

  async findAll(query: QuerySponsorDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Sponsor> = {};
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

  async findOne(id: string): Promise<Sponsor> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Sponsor ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateSponsorDto): Promise<Sponsor> {
    const entity = await this.findOne(id);
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.name !== undefined) entity.name = dto.name;
    if (dto.tier !== undefined) entity.tier = dto.tier;
    if (dto.logoUrl !== undefined) entity.logoUrl = dto.logoUrl;
    if (dto.websiteUrl !== undefined) entity.websiteUrl = dto.websiteUrl;
    if (dto.contributionCents !== undefined) entity.contributionCents = dto.contributionCents;
    if (dto.isActive !== undefined) entity.isActive = dto.isActive;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Sponsor ${id}`);
  }

  async bulkCreate(dtos: CreateSponsorDto[]): Promise<Sponsor[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Sponsor>[]);
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

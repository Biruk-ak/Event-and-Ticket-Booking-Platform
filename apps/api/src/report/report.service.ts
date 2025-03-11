import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto, UpdateReportDto, QueryReportDto } from './report.dto';

@Injectable()
export class ReportService {
  private readonly logger = new Logger(ReportService.name);

  constructor(
    @InjectRepository(Report)
    private readonly repo: Repository<Report>,
  ) {}

  async create(dto: CreateReportDto): Promise<Report> {
    this.logger.log(`Creating Report`);
    const entity = this.repo.create(dto as Partial<Report>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Report ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryReportDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Report> = {};
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

  async findOne(id: string): Promise<Report> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Report ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateReportDto): Promise<Report> {
    const entity = await this.findOne(id);
    if (dto.ownerId !== undefined) entity.ownerId = dto.ownerId;
    if (dto.eventId !== undefined) entity.eventId = dto.eventId;
    if (dto.type !== undefined) entity.type = dto.type;
    if (dto.format !== undefined) entity.format = dto.format;
    if (dto.status !== undefined) entity.status = dto.status;
    if (dto.fileUrl !== undefined) entity.fileUrl = dto.fileUrl;
    if (dto.generatedAt !== undefined) entity.generatedAt = dto.generatedAt;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Report ${id}`);
  }

  async bulkCreate(dtos: CreateReportDto[]): Promise<Report[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Report>[]);
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

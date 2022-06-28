import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Like, Between } from 'typeorm';
import { Venue } from './venue.entity';
import { CreateVenueDto, UpdateVenueDto, QueryVenueDto } from './venue.dto';

@Injectable()
export class VenueService {
  private readonly logger = new Logger(VenueService.name);

  constructor(
    @InjectRepository(Venue)
    private readonly repo: Repository<Venue>,
  ) {}

  async create(dto: CreateVenueDto): Promise<Venue> {
    this.logger.log(`Creating Venue`);
    const entity = this.repo.create(dto as Partial<Venue>);
    const saved = await this.repo.save(entity);
    this.logger.log(`Created Venue ${saved.id}`);
    return saved;
  }

  async findAll(query: QueryVenueDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: FindOptionsWhere<Venue> = {};
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

  async findOne(id: string): Promise<Venue> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) {
      throw new NotFoundException(`Venue ${id} not found`);
    }
    return entity;
  }

  async update(id: string, dto: UpdateVenueDto): Promise<Venue> {
    const entity = await this.findOne(id);
    if (dto.name !== undefined) entity.name = dto.name;
    if (dto.address !== undefined) entity.address = dto.address;
    if (dto.city !== undefined) entity.city = dto.city;
    if (dto.country !== undefined) entity.country = dto.country;
    if (dto.capacity !== undefined) entity.capacity = dto.capacity;
    if (dto.latitude !== undefined) entity.latitude = dto.latitude;
    if (dto.longitude !== undefined) entity.longitude = dto.longitude;
    return this.repo.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
    this.logger.log(`Removed Venue ${id}`);
  }

  async bulkCreate(dtos: CreateVenueDto[]): Promise<Venue[]> {
    if (!dtos?.length) {
      throw new BadRequestException('No items provided');
    }
    const entities = this.repo.create(dtos as Partial<Venue>[]);
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

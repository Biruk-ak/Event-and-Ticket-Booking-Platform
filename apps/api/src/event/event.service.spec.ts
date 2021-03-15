import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { NotFoundException } from '@nestjs/common';

describe('EventService', () => {
  let service: EventService;
  const repo = {
    create: jest.fn((d) => ({ ...d, id: 'uuid-1', toPublic: () => d })),
    save: jest.fn(async (e) => e),
    findAndCount: jest.fn(async () => [[], 0]),
    findOne: jest.fn(),
    remove: jest.fn(),
    count: jest.fn(async () => 0),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventService,
        { provide: getRepositoryToken(Event), useValue: repo },
      ],
    }).compile();
    service = module.get<EventService>(EventService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates an entity', async () => {
    const result = await service.create({} as any);
    expect(repo.create).toHaveBeenCalled();
    expect(repo.save).toHaveBeenCalled();
    expect(result).toBeDefined();
  });

  it('lists entities with pagination', async () => {
    const result = await service.findAll({ page: 1, limit: 10 });
    expect(result.meta.page).toBe(1);
    expect(result.items).toEqual([]);
  });

  it('throws when entity missing', async () => {
    repo.findOne.mockResolvedValue(null);
    await expect(service.findOne('missing')).rejects.toBeInstanceOf(NotFoundException);
  });

  it('updates an entity', async () => {
    repo.findOne.mockResolvedValue({ id: 'uuid-1', toPublic() { return this; } });
    const result = await service.update('uuid-1', {} as any);
    expect(repo.save).toHaveBeenCalled();
    expect(result).toBeDefined();
  });

  it('removes an entity', async () => {
    repo.findOne.mockResolvedValue({ id: 'uuid-1' });
    await service.remove('uuid-1');
    expect(repo.remove).toHaveBeenCalled();
  });

  it('counts entities', async () => {
    repo.count.mockResolvedValue(5);
    await expect(service.count()).resolves.toBe(5);
  });

  it('checks existence', async () => {
    repo.count.mockResolvedValue(1);
    await expect(service.exists('uuid-1')).resolves.toBe(true);
  });
});

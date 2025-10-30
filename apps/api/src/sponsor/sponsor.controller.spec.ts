import { Test } from '@nestjs/testing';
import { SponsorController } from './sponsor.controller';
import { SponsorService } from './sponsor.service';

describe('SponsorController', () => {
  let controller: SponsorController;
  const service = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    count: jest.fn(),
    bulkCreate: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [SponsorController],
      providers: [{ provide: SponsorService, useValue: service }],
    }).compile();
    controller = module.get(SponsorController);
  });

  it('delegates create', async () => {
    service.create.mockResolvedValue({ id: '1' });
    await expect(controller.create({} as any)).resolves.toEqual({ id: '1' });
  });

  it('delegates findAll', async () => {
    service.findAll.mockResolvedValue({ items: [], meta: {} });
    await expect(controller.findAll({} as any)).resolves.toBeDefined();
  });

  it('delegates findOne', async () => {
    service.findOne.mockResolvedValue({ id: '1' });
    await expect(controller.findOne('1')).resolves.toEqual({ id: '1' });
  });

  it('delegates update', async () => {
    service.update.mockResolvedValue({ id: '1' });
    await expect(controller.update('1', {} as any)).resolves.toEqual({ id: '1' });
  });

  it('delegates remove', async () => {
    service.remove.mockResolvedValue(undefined);
    await expect(controller.remove('1')).resolves.toBeUndefined();
  });
});

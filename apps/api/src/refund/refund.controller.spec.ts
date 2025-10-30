import { Test } from '@nestjs/testing';
import { RefundController } from './refund.controller';
import { RefundService } from './refund.service';

describe('RefundController', () => {
  let controller: RefundController;
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
      controllers: [RefundController],
      providers: [{ provide: RefundService, useValue: service }],
    }).compile();
    controller = module.get(RefundController);
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

import { Test } from '@nestjs/testing';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

describe('NotificationController', () => {
  let controller: NotificationController;
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
      controllers: [NotificationController],
      providers: [{ provide: NotificationService, useValue: service }],
    }).compile();
    controller = module.get(NotificationController);
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

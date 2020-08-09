import { Test } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();
    controller = module.get(HealthController);
  });

  it('returns ok status', () => {
    expect(controller.check().status).toBe('ok');
  });

  it('reports ready', () => {
    expect(controller.ready().ready).toBe(true);
  });

  it('reports live', () => {
    expect(controller.live().live).toBe(true);
  });
});

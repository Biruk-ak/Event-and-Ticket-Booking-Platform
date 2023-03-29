import { Test } from '@nestjs/testing';
import { DiscountEngine } from './discount.engine';
import { DiscountService } from './discount.service';
import { BadRequestException } from '@nestjs/common';

describe('DiscountEngine', () => {
  let engine: DiscountEngine;
  const discounts = { findAll: jest.fn(), findOne: jest.fn(), update: jest.fn() };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DiscountEngine, { provide: DiscountService, useValue: discounts }],
    }).compile();
    engine = module.get(DiscountEngine);
  });

  it('applies percent off', async () => {
    discounts.findAll.mockResolvedValue({
      items: [{ id: 'd1', code: 'SAVE10', eventId: 'e1', percentOff: 10, isActive: true, redemptionCount: 0, maxRedemptions: 100 }],
    });
    const result = await engine.applyCode('SAVE10', 'e1', 10000);
    expect(result.discountCents).toBe(1000);
    expect(result.totalCents).toBe(9000);
  });

  it('rejects inactive codes', async () => {
    discounts.findAll.mockResolvedValue({
      items: [{ id: 'd1', code: 'OLD', eventId: 'e1', isActive: false }],
    });
    await expect(engine.applyCode('OLD', 'e1', 1000)).rejects.toBeInstanceOf(BadRequestException);
  });
});

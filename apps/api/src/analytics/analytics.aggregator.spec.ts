import { Test } from '@nestjs/testing';
import { AnalyticsAggregator } from './analytics.aggregator';
import { AnalyticsService } from './analytics.service';
import { TicketService } from '../ticket/ticket.service';
import { OrderService } from '../order/order.service';

describe('AnalyticsAggregator', () => {
  it('creates snapshot', async () => {
    const analytics = { create: jest.fn(async (d) => ({ id: 'a1', ...d })), findAll: jest.fn() };
    const tickets = { count: jest.fn(async () => 10) };
    const orders = { count: jest.fn(async () => 4) };
    const module = await Test.createTestingModule({
      providers: [
        AnalyticsAggregator,
        { provide: AnalyticsService, useValue: analytics },
        { provide: TicketService, useValue: tickets },
        { provide: OrderService, useValue: orders },
      ],
    }).compile();
    const service = module.get(AnalyticsAggregator);
    const result = await service.snapshotEvent('e1');
    expect(result.metric).toBe('tickets_sold_proxy');
  });
});

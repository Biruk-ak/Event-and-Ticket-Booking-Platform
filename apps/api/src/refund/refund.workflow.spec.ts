import { Test } from '@nestjs/testing';
import { RefundWorkflowService } from './refund.workflow';
import { RefundService } from './refund.service';
import { TicketService } from '../ticket/ticket.service';
import { OrderService } from '../order/order.service';
import { BadRequestException } from '@nestjs/common';

describe('RefundWorkflowService', () => {
  let service: RefundWorkflowService;
  const refunds = { create: jest.fn(), findOne: jest.fn(), update: jest.fn() };
  const tickets = { findOne: jest.fn(), update: jest.fn() };
  const orders = { findOne: jest.fn() };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RefundWorkflowService,
        { provide: RefundService, useValue: refunds },
        { provide: TicketService, useValue: tickets },
        { provide: OrderService, useValue: orders },
      ],
    }).compile();
    service = module.get(RefundWorkflowService);
  });

  it('blocks refund for checked-in tickets', async () => {
    tickets.findOne.mockResolvedValue({ status: 'checked_in' });
    await expect(
      service.requestRefund({ orderId: 'o', ticketId: 't', buyerId: 'b', reason: 'x' }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('creates pending refund', async () => {
    tickets.findOne.mockResolvedValue({ status: 'sold', priceCents: 1000, currency: 'USD' });
    orders.findOne.mockResolvedValue({ totalCents: 1000 });
    refunds.create.mockResolvedValue({ id: 'r1', status: 'pending' });
    const result = await service.requestRefund({ orderId: 'o', ticketId: 't', buyerId: 'b', reason: 'change of plans' });
    expect(result.status).toBe('pending');
  });
});

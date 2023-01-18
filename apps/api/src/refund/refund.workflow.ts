import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { RefundService } from './refund.service';
import { TicketService } from '../ticket/ticket.service';
import { OrderService } from '../order/order.service';

@Injectable()
export class RefundWorkflowService {
  private readonly logger = new Logger(RefundWorkflowService.name);

  constructor(
    private readonly refunds: RefundService,
    private readonly tickets: TicketService,
    private readonly orders: OrderService,
  ) {}

  async requestRefund(input: {
    orderId: string;
    ticketId: string;
    buyerId: string;
    reason: string;
  }) {
    const ticket = await this.tickets.findOne(input.ticketId);
    if ((ticket as any).status === 'refunded') {
      throw new BadRequestException('Ticket already refunded');
    }
    if ((ticket as any).status === 'checked_in') {
      throw new BadRequestException('Checked-in tickets cannot be refunded');
    }
    const order = await this.orders.findOne(input.orderId);
    const refund = await this.refunds.create({
      orderId: input.orderId,
      ticketId: input.ticketId,
      buyerId: input.buyerId,
      amountCents: (ticket as any).priceCents || (order as any).totalCents || 0,
      currency: (ticket as any).currency || 'USD',
      reason: input.reason,
      status: 'pending',
    } as any);
    this.logger.log(`Refund requested ${refund.id}`);
    return refund;
  }

  async approve(refundId: string) {
    const refund = await this.refunds.findOne(refundId);
    await this.tickets.update((refund as any).ticketId, { status: 'refunded' } as any);
    return this.refunds.update(refundId, { status: 'approved', processedAt: new Date() } as any);
  }

  async reject(refundId: string, note?: string) {
    this.logger.warn(`Refund rejected ${refundId}: ${note || ''}`);
    return this.refunds.update(refundId, { status: 'rejected', reason: note } as any);
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { TicketService } from '../ticket/ticket.service';
import { OrderService } from '../order/order.service';

@Injectable()
export class AnalyticsAggregator {
  private readonly logger = new Logger(AnalyticsAggregator.name);

  constructor(
    private readonly analytics: AnalyticsService,
    private readonly tickets: TicketService,
    private readonly orders: OrderService,
  ) {}

  async snapshotEvent(eventId: string) {
    const ticketCount = await this.tickets.count();
    const orderCount = await this.orders.count();
    const sold = await this.analytics.create({
      eventId,
      metric: 'tickets_sold_proxy',
      value: ticketCount,
      dimensionsJson: JSON.stringify({ orderCount }),
      capturedAt: new Date(),
    } as any);
    this.logger.log(`Analytics snapshot for ${eventId}`);
    return sold;
  }

  async revenueSeries(eventId: string) {
    const listed = await this.analytics.findAll({ page: 1, limit: 100 } as any);
    return (listed.items || []).filter((i: any) => i.eventId === eventId);
  }
}

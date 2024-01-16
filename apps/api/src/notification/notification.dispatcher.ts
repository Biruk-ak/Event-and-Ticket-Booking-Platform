import { Injectable, Logger } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Injectable()
export class NotificationDispatcher {
  private readonly logger = new Logger(NotificationDispatcher.name);

  constructor(private readonly notifications: NotificationService) {}

  async notifyUser(userId: string, title: string, body: string, channel: 'push' | 'email' | 'in_app' = 'in_app') {
    const created = await this.notifications.create({
      userId,
      channel,
      title,
      body,
      status: 'queued',
      payloadJson: '{}',
    } as any);
    this.logger.log(`Queued ${channel} notification ${created.id} for ${userId}`);
    return this.notifications.update(created.id, { status: 'sent', sentAt: new Date() } as any);
  }

  async notifyEventPublished(organizerId: string, eventTitle: string) {
    return this.notifyUser(organizerId, 'Event published', `${eventTitle} is now live.`, 'email');
  }

  async notifyTicketPurchased(buyerId: string, eventTitle: string) {
    return this.notifyUser(buyerId, 'Ticket confirmed', `Your ticket for ${eventTitle} is ready.`, 'push');
  }

  async notifyRefundUpdate(buyerId: string, status: string) {
    return this.notifyUser(buyerId, 'Refund update', `Your refund is now ${status}.`, 'in_app');
  }
}

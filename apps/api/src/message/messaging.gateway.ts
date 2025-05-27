import { Injectable, Logger } from '@nestjs/common';
import { MessageService } from './message.service';

@Injectable()
export class MessagingGatewayService {
  private readonly logger = new Logger(MessagingGatewayService.name);

  constructor(private readonly messages: MessageService) {}

  async send(input: {
    threadId: string;
    senderId: string;
    recipientId: string;
    eventId?: string;
    body: string;
  }) {
    const msg = await this.messages.create({
      ...input,
      isRead: false,
      sentAt: new Date(),
    } as any);
    this.logger.log(`Message ${msg.id} in thread ${input.threadId}`);
    return msg;
  }

  async markRead(messageId: string) {
    return this.messages.update(messageId, { isRead: true } as any);
  }

  async listThread(threadId: string) {
    const all = await this.messages.findAll({ page: 1, limit: 200 } as any);
    return (all.items || []).filter((m: any) => m.threadId === threadId);
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { EventService } from './event.service';

@Injectable()
export class EventLifecycleService {
  private readonly logger = new Logger(EventLifecycleService.name);

  constructor(private readonly events: EventService) {}

  async publish(eventId: string) {
    this.logger.log(`Publishing event ${eventId}`);
    return this.events.update(eventId, { status: 'published' } as any);
  }

  async cancel(eventId: string, reason?: string) {
    this.logger.warn(`Cancelling event ${eventId}: ${reason || 'unspecified'}`);
    return this.events.update(eventId, { status: 'cancelled' } as any);
  }

  async complete(eventId: string) {
    return this.events.update(eventId, { status: 'completed' } as any);
  }

  async archive(eventId: string) {
    return this.events.update(eventId, { status: 'archived' } as any);
  }

  async duplicate(eventId: string) {
    const source = await this.events.findOne(eventId);
    const publicData = (source as any).toPublic();
    delete publicData.id;
    publicData.title = `${publicData.title} (Copy)`;
    publicData.status = 'draft';
    publicData.slug = `${publicData.slug}-copy-${Date.now()}`;
    return this.events.create(publicData);
  }
}

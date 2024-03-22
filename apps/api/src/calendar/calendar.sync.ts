import { Injectable, Logger } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { EventService } from '../event/event.service';

@Injectable()
export class CalendarSyncService {
  private readonly logger = new Logger(CalendarSyncService.name);

  constructor(
    private readonly calendar: CalendarService,
    private readonly events: EventService,
  ) {}

  async addEventToUserCalendar(userId: string, eventId: string) {
    const event = await this.events.findOne(eventId);
    const entry = await this.calendar.create({
      userId,
      eventId,
      title: (event as any).title,
      startsAt: (event as any).startsAt,
      endsAt: (event as any).endsAt,
      source: 'platform',
    } as any);
    this.logger.log(`Calendar entry ${entry.id} for user ${userId}`);
    return entry;
  }

  async upcoming(userId: string) {
    const all = await this.calendar.findAll({ page: 1, limit: 100 } as any);
    return (all.items || []).filter((i: any) => i.userId === userId);
  }
}

import { Test } from '@nestjs/testing';
import { CalendarSyncService } from './calendar.sync';
import { CalendarService } from './calendar.service';
import { EventService } from '../event/event.service';

describe('CalendarSyncService', () => {
  it('adds event to calendar', async () => {
    const calendar = { create: jest.fn(async (d) => ({ id: 'c1', ...d })), findAll: jest.fn() };
    const events = { findOne: jest.fn(async () => ({ title: 'Show', startsAt: new Date(), endsAt: new Date() })) };
    const module = await Test.createTestingModule({
      providers: [
        CalendarSyncService,
        { provide: CalendarService, useValue: calendar },
        { provide: EventService, useValue: events },
      ],
    }).compile();
    const service = module.get(CalendarSyncService);
    const result = await service.addEventToUserCalendar('u1', 'e1');
    expect(result.id).toBe('c1');
  });
});

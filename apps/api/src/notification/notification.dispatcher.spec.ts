import { Test } from '@nestjs/testing';
import { NotificationDispatcher } from './notification.dispatcher';
import { NotificationService } from './notification.service';

describe('NotificationDispatcher', () => {
  let dispatcher: NotificationDispatcher;
  const notifications = {
    create: jest.fn(async (d) => ({ id: 'n1', ...d })),
    update: jest.fn(async (id, d) => ({ id, ...d })),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [NotificationDispatcher, { provide: NotificationService, useValue: notifications }],
    }).compile();
    dispatcher = module.get(NotificationDispatcher);
  });

  it('sends ticket purchase notification', async () => {
    const result = await dispatcher.notifyTicketPurchased('u1', 'Jazz Night');
    expect(result.status).toBe('sent');
  });
});

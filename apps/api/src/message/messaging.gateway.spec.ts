import { Test } from '@nestjs/testing';
import { MessagingGatewayService } from './messaging.gateway';
import { MessageService } from './message.service';

describe('MessagingGatewayService', () => {
  it('sends a message', async () => {
    const messages = {
      create: jest.fn(async (d) => ({ id: 'm1', ...d })),
      update: jest.fn(),
      findAll: jest.fn(async () => ({ items: [] })),
    };
    const module = await Test.createTestingModule({
      providers: [MessagingGatewayService, { provide: MessageService, useValue: messages }],
    }).compile();
    const gateway = module.get(MessagingGatewayService);
    const result = await gateway.send({
      threadId: 't1',
      senderId: 's1',
      recipientId: 'r1',
      body: 'Hello',
    });
    expect(result.id).toBe('m1');
  });
});

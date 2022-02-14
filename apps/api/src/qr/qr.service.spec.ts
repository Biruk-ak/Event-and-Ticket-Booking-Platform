import { Test } from '@nestjs/testing';
import { QrService } from './qr.service';
import { TicketService } from '../ticket/ticket.service';
import { BadRequestException } from '@nestjs/common';

describe('QrService', () => {
  let service: QrService;
  const tickets = {
    findOne: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QrService, { provide: TicketService, useValue: tickets }],
    }).compile();
    service = module.get(QrService);
    jest.clearAllMocks();
  });

  it('generates a signed payload', () => {
    const payload = service.generatePayload('t1', 'e1', 'b1');
    expect(payload.startsWith('ETBP-QR|')).toBe(true);
  });

  it('rejects invalid payload', async () => {
    await expect(service.verify('bad')).rejects.toBeInstanceOf(BadRequestException);
  });

  it('issues QR for ticket', async () => {
    tickets.findOne.mockResolvedValue({ id: 't1', eventId: 'e1', buyerId: 'b1', toPublic() { return this; } });
    tickets.update.mockImplementation(async (_id, dto) => ({ id: 't1', ...dto }));
    const result = await service.issueForTicket('t1');
    expect(result.qrPayload).toContain('ETBP-QR');
  });
});

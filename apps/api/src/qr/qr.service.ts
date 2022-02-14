import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { createHash, randomBytes } from 'crypto';
import { TicketService } from '../ticket/ticket.service';

@Injectable()
export class QrService {
  private readonly logger = new Logger(QrService.name);

  constructor(private readonly tickets: TicketService) {}

  generatePayload(ticketId: string, eventId: string, buyerId: string): string {
    const nonce = randomBytes(8).toString('hex');
    const raw = `ETBP-QR|${ticketId}|${eventId}|${buyerId}|${nonce}`;
    const signature = createHash('sha256').update(raw + (process.env.QR_SECRET || 'qr-dev')).digest('hex').slice(0, 16);
    return `${raw}|${signature}`;
  }

  async issueForTicket(ticketId: string) {
    const ticket = await this.tickets.findOne(ticketId);
    const payload = this.generatePayload(ticket.id, (ticket as any).eventId, (ticket as any).buyerId);
    const updated = await this.tickets.update(ticketId, { qrPayload: payload, status: 'sold' } as any);
    this.logger.log(`Issued QR for ticket ${ticketId}`);
    return { ticketId, qrPayload: payload, ticket: updated };
  }

  async verify(payload: string) {
    const parts = payload.split('|');
    if (parts.length < 6 || parts[0] !== 'ETBP-QR') {
      throw new BadRequestException('Invalid QR payload');
    }
    const [, ticketId, eventId, buyerId, nonce, signature] = parts;
    const raw = `ETBP-QR|${ticketId}|${eventId}|${buyerId}|${nonce}`;
    const expected = createHash('sha256').update(raw + (process.env.QR_SECRET || 'qr-dev')).digest('hex').slice(0, 16);
    if (expected !== signature) {
      throw new BadRequestException('QR signature mismatch');
    }
    const ticket = await this.tickets.findOne(ticketId);
    return { valid: true, ticket: (ticket as any).toPublic(), eventId, buyerId };
  }

  async checkIn(payload: string) {
    const result = await this.verify(payload);
    const ticketId = result.ticket.id;
    if ((result.ticket as any).status === 'checked_in') {
      throw new BadRequestException('Ticket already checked in');
    }
    const updated = await this.tickets.update(ticketId, {
      status: 'checked_in',
      checkedInAt: new Date(),
    } as any);
    return { checkedIn: true, ticket: updated };
  }
}

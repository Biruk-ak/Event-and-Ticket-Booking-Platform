export type TicketStatus = 'available' | 'reserved' | 'sold' | 'checked_in' | 'refunded' | 'cancelled';

export interface TicketType {
  id: string;
  eventId: string;
  name: string;
  description?: string;
  priceCents: number;
  currency: string;
  quantityTotal: number;
  quantitySold: number;
  salesStartAt?: string;
  salesEndAt?: string;
  isRefundable: boolean;
}

export interface Ticket {
  id: string;
  eventId: string;
  ticketTypeId: string;
  buyerId: string;
  orderId: string;
  status: TicketStatus;
  qrPayload: string;
  seatLabel?: string;
  purchasedAt: string;
  checkedInAt?: string;
}

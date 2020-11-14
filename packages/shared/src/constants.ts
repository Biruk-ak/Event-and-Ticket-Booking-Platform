export const PLATFORM_NAME = 'Event & Ticket Booking Platform';
export const DEFAULT_CURRENCY = 'USD';
export const MAX_TICKETS_PER_ORDER = 20;
export const QR_PREFIX = 'ETBP-QR';
export const API_PREFIX = '/api/v1';

export const EVENT_STATUSES = ['draft', 'published', 'cancelled', 'completed', 'archived'] as const;
export const TICKET_STATUSES = ['available', 'reserved', 'sold', 'checked_in', 'refunded', 'cancelled'] as const;

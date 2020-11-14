export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function isPositiveInt(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value > 0;
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function assertEventDates(startsAt: string, endsAt: string): void {
  const start = Date.parse(startsAt);
  const end = Date.parse(endsAt);
  if (Number.isNaN(start) || Number.isNaN(end)) {
    throw new Error('Invalid event dates');
  }
  if (end <= start) {
    throw new Error('Event end must be after start');
  }
}

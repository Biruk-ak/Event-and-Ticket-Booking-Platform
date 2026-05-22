
export const PLATFORM_FEATURES = [
  { key: 'event-creation', label: 'Event Creation', apps: ['api', 'organizer', 'mobile'] },
  { key: 'qr-tickets', label: 'QR Tickets', apps: ['api', 'mobile', 'organizer'] },
  { key: 'refunds', label: 'Refunds', apps: ['api', 'admin', 'mobile'] },
  { key: 'discount-codes', label: 'Discount Codes', apps: ['api', 'organizer'] },
  { key: 'sponsors', label: 'Sponsors', apps: ['api', 'organizer', 'mobile'] },
  { key: 'notifications', label: 'Notifications', apps: ['api', 'mobile', 'organizer'] },
  { key: 'calendar', label: 'Calendar', apps: ['api', 'mobile', 'organizer'] },
  { key: 'analytics', label: 'Analytics', apps: ['api', 'organizer', 'admin'] },
  { key: 'reports', label: 'Reports', apps: ['api', 'organizer', 'admin'] },
  { key: 'messaging', label: 'Messaging', apps: ['api', 'mobile', 'organizer'] },
  { key: 'reviews', label: 'Reviews', apps: ['api', 'mobile', 'admin'] },
] as const;

export type PlatformFeatureKey = (typeof PLATFORM_FEATURES)[number]['key'];

export function isFeatureEnabled(key: PlatformFeatureKey): boolean {
  return PLATFORM_FEATURES.some((f) => f.key === key);
}

export function featuresForApp(app: string) {
  return PLATFORM_FEATURES.filter((f) => (f.apps as readonly string[]).includes(app));
}

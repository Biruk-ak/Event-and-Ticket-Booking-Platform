export type EventStatus = 'draft' | 'published' | 'cancelled' | 'completed' | 'archived';

export interface EventVenue {
  name: string;
  address: string;
  city: string;
  country: string;
  latitude?: number;
  longitude?: number;
  capacity?: number;
}

export interface PlatformEvent {
  id: string;
  organizerId: string;
  title: string;
  slug: string;
  description: string;
  status: EventStatus;
  startsAt: string;
  endsAt: string;
  timezone: string;
  venue: EventVenue;
  coverImageUrl?: string;
  categoryIds: string[];
  tags: string[];
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventInput {
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  timezone: string;
  venue: EventVenue;
  categoryIds?: string[];
  tags?: string[];
}

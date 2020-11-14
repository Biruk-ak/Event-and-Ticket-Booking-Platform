export type UserRole = 'attendee' | 'organizer' | 'admin' | 'support';

export interface PlatformUser {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  phone?: string;
  avatarUrl?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

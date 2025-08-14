import { Injectable, Logger } from '@nestjs/common';
import { ReviewService } from './review.service';

@Injectable()
export class ReviewModerationService {
  private readonly logger = new Logger(ReviewModerationService.name);

  constructor(private readonly reviews: ReviewService) {}

  async submit(input: { eventId: string; authorId: string; rating: number; title: string; body: string }) {
    if (input.rating < 1 || input.rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }
    return this.reviews.create({ ...input, isPublished: false } as any);
  }

  async publish(reviewId: string) {
    this.logger.log(`Publishing review ${reviewId}`);
    return this.reviews.update(reviewId, { isPublished: true, moderatedAt: new Date() } as any);
  }

  async averageForEvent(eventId: string) {
    const listed = await this.reviews.findAll({ page: 1, limit: 500 } as any);
    const rows = (listed.items || []).filter((r: any) => r.eventId === eventId && r.isPublished);
    if (!rows.length) return 0;
    return rows.reduce((sum: number, r: any) => sum + (r.rating || 0), 0) / rows.length;
  }
}

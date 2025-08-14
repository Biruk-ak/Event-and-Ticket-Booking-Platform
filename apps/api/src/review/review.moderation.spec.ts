import { Test } from '@nestjs/testing';
import { ReviewModerationService } from './review.moderation';
import { ReviewService } from './review.service';

describe('ReviewModerationService', () => {
  it('submits unpublished review', async () => {
    const reviews = {
      create: jest.fn(async (d) => ({ id: 'rv1', ...d })),
      update: jest.fn(),
      findAll: jest.fn(async () => ({ items: [] })),
    };
    const module = await Test.createTestingModule({
      providers: [ReviewModerationService, { provide: ReviewService, useValue: reviews }],
    }).compile();
    const service = module.get(ReviewModerationService);
    const result = await service.submit({
      eventId: 'e1',
      authorId: 'a1',
      rating: 5,
      title: 'Great',
      body: 'Loved it',
    });
    expect(result.isPublished).toBe(false);
  });
});

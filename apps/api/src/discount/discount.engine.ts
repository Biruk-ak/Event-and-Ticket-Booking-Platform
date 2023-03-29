import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { DiscountService } from './discount.service';

@Injectable()
export class DiscountEngine {
  private readonly logger = new Logger(DiscountEngine.name);

  constructor(private readonly discounts: DiscountService) {}

  async applyCode(code: string, eventId: string, subtotalCents: number) {
    const listed = await this.discounts.findAll({ search: code, page: 1, limit: 50 } as any);
    const match = (listed.items || []).find((d: any) => d.code === code && d.eventId === eventId);
    if (!match) {
      throw new BadRequestException('Discount code not found');
    }
    if (!match.isActive) {
      throw new BadRequestException('Discount code inactive');
    }
    if (match.maxRedemptions && match.redemptionCount >= match.maxRedemptions) {
      throw new BadRequestException('Discount code exhausted');
    }
    let discountCents = 0;
    if (match.percentOff) {
      discountCents = Math.floor((subtotalCents * match.percentOff) / 100);
    } else if (match.amountOffCents) {
      discountCents = match.amountOffCents;
    }
    discountCents = Math.min(discountCents, subtotalCents);
    this.logger.log(`Applied code ${code}: -${discountCents}`);
    return {
      code,
      discountCents,
      totalCents: subtotalCents - discountCents,
      discountId: match.id,
    };
  }

  async redeem(discountId: string) {
    const d = await this.discounts.findOne(discountId);
    return this.discounts.update(discountId, {
      redemptionCount: ((d as any).redemptionCount || 0) + 1,
    } as any);
  }
}

import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDiscountDto {
  @IsString()\n  @IsOptional()\n  code?: string;

  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsNumber()\n  @IsOptional()\n  percentOff?: number;

  @IsNumber()\n  @IsOptional()\n  amountOffCents?: number;

  @IsNumber()\n  @IsOptional()\n  maxRedemptions?: number;

  @IsNumber()\n  @IsOptional()\n  redemptionCount?: number;

  @IsOptional()\n  startsAt?: any;

  @IsOptional()\n  endsAt?: any;

  @IsBoolean()\n  @IsOptional()\n  isActive?: boolean;
}

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {}

export class QueryDiscountDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @IsOptional()
  @IsString()
  sortBy?: string = 'createdAt';

  @IsOptional()
  @IsString()
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
}

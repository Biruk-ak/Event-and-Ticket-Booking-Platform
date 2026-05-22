import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDiscountDto {
  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  eventId?: string;

  @IsNumber()
  @IsOptional()
  percentOff?: number;

  @IsNumber()
  @IsOptional()
  amountOffCents?: number;

  @IsNumber()
  @IsOptional()
  maxRedemptions?: number;

  @IsNumber()
  @IsOptional()
  redemptionCount?: number;

  @IsOptional()
  startsAt?: any;

  @IsOptional()
  endsAt?: any;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
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

import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRefundDto {
  @IsString()\n  @IsOptional()\n  orderId?: string;

  @IsString()\n  @IsOptional()\n  ticketId?: string;

  @IsString()\n  @IsOptional()\n  buyerId?: string;

  @IsNumber()\n  @IsOptional()\n  amountCents?: number;

  @IsString()\n  @IsOptional()\n  currency?: string;

  @IsString()\n  @IsOptional()\n  reason?: string;

  @IsString()\n  @IsOptional()\n  status?: string;

  @IsOptional()\n  processedAt?: any;
}

export class UpdateRefundDto extends PartialType(CreateRefundDto) {}

export class QueryRefundDto {
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

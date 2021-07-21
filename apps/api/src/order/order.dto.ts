import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsString()\n  @IsOptional()\n  buyerId?: string;

  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  status?: string;

  @IsNumber()\n  @IsOptional()\n  totalCents?: number;

  @IsString()\n  @IsOptional()\n  currency?: string;

  @IsString()\n  @IsOptional()\n  discountCode?: string;

  @IsOptional()\n  paidAt?: any;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}

export class QueryOrderDto {
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

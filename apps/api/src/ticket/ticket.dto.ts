import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTicketDto {
  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  ticketTypeId?: string;

  @IsString()\n  @IsOptional()\n  buyerId?: string;

  @IsString()\n  @IsOptional()\n  orderId?: string;

  @IsString()\n  @IsOptional()\n  status?: string;

  @IsString()\n  @IsOptional()\n  qrPayload?: string;

  @IsString()\n  @IsOptional()\n  seatLabel?: string;

  @IsNumber()\n  @IsOptional()\n  priceCents?: number;

  @IsString()\n  @IsOptional()\n  currency?: string;

  @IsOptional()\n  purchasedAt?: any;

  @IsOptional()\n  checkedInAt?: any;
}

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}

export class QueryTicketDto {
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

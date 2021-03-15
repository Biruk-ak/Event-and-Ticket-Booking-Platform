import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateEventDto {
  @IsString()\n  @IsOptional()\n  organizerId?: string;

  @IsString()\n  @IsOptional()\n  title?: string;

  @IsString()\n  @IsOptional()\n  slug?: string;

  @IsString()\n  @IsOptional()\n  description?: string;

  @IsString()\n  @IsOptional()\n  status?: string;

  @IsOptional()\n  startsAt?: any;

  @IsOptional()\n  endsAt?: any;

  @IsString()\n  @IsOptional()\n  timezone?: string;

  @IsString()\n  @IsOptional()\n  venueName?: string;

  @IsString()\n  @IsOptional()\n  venueAddress?: string;

  @IsString()\n  @IsOptional()\n  venueCity?: string;

  @IsString()\n  @IsOptional()\n  coverImageUrl?: string;

  @IsBoolean()\n  @IsOptional()\n  isFeatured?: boolean;

  @IsNumber()\n  @IsOptional()\n  capacity?: number;
}

export class UpdateEventDto extends PartialType(CreateEventDto) {}

export class QueryEventDto {
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

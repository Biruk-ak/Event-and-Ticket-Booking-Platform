import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAnalyticsDto {
  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  metric?: string;

  @IsNumber()\n  @IsOptional()\n  value?: number;

  @IsString()\n  @IsOptional()\n  dimensionsJson?: string;

  @IsOptional()\n  capturedAt?: any;
}

export class UpdateAnalyticsDto extends PartialType(CreateAnalyticsDto) {}

export class QueryAnalyticsDto {
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

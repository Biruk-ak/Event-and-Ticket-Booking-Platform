import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateReviewDto {
  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  authorId?: string;

  @IsNumber()\n  @IsOptional()\n  rating?: number;

  @IsString()\n  @IsOptional()\n  title?: string;

  @IsString()\n  @IsOptional()\n  body?: string;

  @IsBoolean()\n  @IsOptional()\n  isPublished?: boolean;

  @IsOptional()\n  moderatedAt?: any;
}

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}

export class QueryReviewDto {
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

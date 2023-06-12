import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSponsorDto {
  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  name?: string;

  @IsString()\n  @IsOptional()\n  tier?: string;

  @IsString()\n  @IsOptional()\n  logoUrl?: string;

  @IsString()\n  @IsOptional()\n  websiteUrl?: string;

  @IsNumber()\n  @IsOptional()\n  contributionCents?: number;

  @IsBoolean()\n  @IsOptional()\n  isActive?: boolean;
}

export class UpdateSponsorDto extends PartialType(CreateSponsorDto) {}

export class QuerySponsorDto {
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

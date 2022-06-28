import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateVenueDto {
  @IsString()\n  @IsOptional()\n  name?: string;

  @IsString()\n  @IsOptional()\n  address?: string;

  @IsString()\n  @IsOptional()\n  city?: string;

  @IsString()\n  @IsOptional()\n  country?: string;

  @IsNumber()\n  @IsOptional()\n  capacity?: number;

  @IsNumber()\n  @IsOptional()\n  latitude?: number;

  @IsNumber()\n  @IsOptional()\n  longitude?: number;
}

export class UpdateVenueDto extends PartialType(CreateVenueDto) {}

export class QueryVenueDto {
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

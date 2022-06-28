import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoryDto {
  @IsString()\n  @IsOptional()\n  name?: string;

  @IsString()\n  @IsOptional()\n  slug?: string;

  @IsString()\n  @IsOptional()\n  description?: string;

  @IsBoolean()\n  @IsOptional()\n  isActive?: boolean;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

export class QueryCategoryDto {
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

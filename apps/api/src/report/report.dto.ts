import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateReportDto {
  @IsString()\n  @IsOptional()\n  ownerId?: string;

  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  type?: string;

  @IsString()\n  @IsOptional()\n  format?: string;

  @IsString()\n  @IsOptional()\n  status?: string;

  @IsString()\n  @IsOptional()\n  fileUrl?: string;

  @IsOptional()\n  generatedAt?: any;
}

export class UpdateReportDto extends PartialType(CreateReportDto) {}

export class QueryReportDto {
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

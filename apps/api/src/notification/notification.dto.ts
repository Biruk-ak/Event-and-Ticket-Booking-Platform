import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNotificationDto {
  @IsString()\n  @IsOptional()\n  userId?: string;

  @IsString()\n  @IsOptional()\n  channel?: string;

  @IsString()\n  @IsOptional()\n  title?: string;

  @IsString()\n  @IsOptional()\n  body?: string;

  @IsString()\n  @IsOptional()\n  payloadJson?: string;

  @IsString()\n  @IsOptional()\n  status?: string;

  @IsOptional()\n  sentAt?: any;

  @IsOptional()\n  readAt?: any;
}

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}

export class QueryNotificationDto {
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

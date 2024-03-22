import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCalendarDto {
  @IsString()\n  @IsOptional()\n  userId?: string;

  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  title?: string;

  @IsOptional()\n  startsAt?: any;

  @IsOptional()\n  endsAt?: any;

  @IsOptional()\n  remindAt?: any;

  @IsString()\n  @IsOptional()\n  source?: string;
}

export class UpdateCalendarDto extends PartialType(CreateCalendarDto) {}

export class QueryCalendarDto {
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

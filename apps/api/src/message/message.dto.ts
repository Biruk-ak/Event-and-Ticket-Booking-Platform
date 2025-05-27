import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMessageDto {
  @IsString()\n  @IsOptional()\n  threadId?: string;

  @IsString()\n  @IsOptional()\n  senderId?: string;

  @IsString()\n  @IsOptional()\n  recipientId?: string;

  @IsString()\n  @IsOptional()\n  eventId?: string;

  @IsString()\n  @IsOptional()\n  body?: string;

  @IsBoolean()\n  @IsOptional()\n  isRead?: boolean;

  @IsOptional()\n  sentAt?: any;
}

export class UpdateMessageDto extends PartialType(CreateMessageDto) {}

export class QueryMessageDto {
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

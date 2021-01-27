import { IsString, IsNumber, IsBoolean, IsOptional, IsUUID, Min, Max, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()\n  @IsOptional()\n  email?: string;

  @IsString()\n  @IsOptional()\n  passwordHash?: string;

  @IsString()\n  @IsOptional()\n  displayName?: string;

  @IsString()\n  @IsOptional()\n  role?: string;

  @IsString()\n  @IsOptional()\n  phone?: string;

  @IsBoolean()\n  @IsOptional()\n  isVerified?: boolean;

  @IsOptional()\n  lastLoginAt?: any;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class QueryUserDto {
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

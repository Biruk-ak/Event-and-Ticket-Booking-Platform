import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { RefundService } from './refund.service';
import { CreateRefundDto, UpdateRefundDto, QueryRefundDto } from './refund.dto';

@ApiTags('refunds')
@ApiBearerAuth()
@Controller('refunds')
export class RefundController {
  constructor(private readonly service: RefundService) {}

  @Post()
  @ApiOperation({ summary: 'Create Refund' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateRefundDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Refunds' })
  bulkCreate(@Body() dtos: CreateRefundDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Refunds' })
  findAll(@Query() query: QueryRefundDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Refunds' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Refund by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Refund' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateRefundDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Refund' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateRefundDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Refund' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

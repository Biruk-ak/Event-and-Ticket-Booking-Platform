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
import { DiscountService } from './discount.service';
import { CreateDiscountDto, UpdateDiscountDto, QueryDiscountDto } from './discount.dto';

@ApiTags('discounts')
@ApiBearerAuth()
@Controller('discounts')
export class DiscountController {
  constructor(private readonly service: DiscountService) {}

  @Post()
  @ApiOperation({ summary: 'Create Discount' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateDiscountDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Discounts' })
  bulkCreate(@Body() dtos: CreateDiscountDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Discounts' })
  findAll(@Query() query: QueryDiscountDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Discounts' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Discount by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Discount' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateDiscountDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Discount' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateDiscountDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Discount' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

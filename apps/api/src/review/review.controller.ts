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
import { ReviewService } from './review.service';
import { CreateReviewDto, UpdateReviewDto, QueryReviewDto } from './review.dto';

@ApiTags('reviews')
@ApiBearerAuth()
@Controller('reviews')
export class ReviewController {
  constructor(private readonly service: ReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Create Review' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateReviewDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Reviews' })
  bulkCreate(@Body() dtos: CreateReviewDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Reviews' })
  findAll(@Query() query: QueryReviewDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Reviews' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Review by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Review' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateReviewDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Review' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateReviewDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Review' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

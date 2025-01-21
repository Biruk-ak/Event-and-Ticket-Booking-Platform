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
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto, UpdateAnalyticsDto, QueryAnalyticsDto } from './analytics.dto';

@ApiTags('analyticss')
@ApiBearerAuth()
@Controller('analyticss')
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Analytics' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateAnalyticsDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Analyticss' })
  bulkCreate(@Body() dtos: CreateAnalyticsDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Analyticss' })
  findAll(@Query() query: QueryAnalyticsDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Analyticss' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Analytics by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Analytics' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateAnalyticsDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Analytics' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateAnalyticsDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Analytics' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

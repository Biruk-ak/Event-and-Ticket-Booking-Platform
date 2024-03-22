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
import { CalendarService } from './calendar.service';
import { CreateCalendarDto, UpdateCalendarDto, QueryCalendarDto } from './calendar.dto';

@ApiTags('calendars')
@ApiBearerAuth()
@Controller('calendars')
export class CalendarController {
  constructor(private readonly service: CalendarService) {}

  @Post()
  @ApiOperation({ summary: 'Create Calendar' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateCalendarDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Calendars' })
  bulkCreate(@Body() dtos: CreateCalendarDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Calendars' })
  findAll(@Query() query: QueryCalendarDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Calendars' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Calendar by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Calendar' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateCalendarDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Calendar' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateCalendarDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Calendar' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

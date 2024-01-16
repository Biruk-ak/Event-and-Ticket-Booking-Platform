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
import { NotificationService } from './notification.service';
import { CreateNotificationDto, UpdateNotificationDto, QueryNotificationDto } from './notification.dto';

@ApiTags('notifications')
@ApiBearerAuth()
@Controller('notifications')
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @Post()
  @ApiOperation({ summary: 'Create Notification' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateNotificationDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Notifications' })
  bulkCreate(@Body() dtos: CreateNotificationDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Notifications' })
  findAll(@Query() query: QueryNotificationDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Notifications' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Notification by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Notification' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateNotificationDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Notification' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateNotificationDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Notification' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

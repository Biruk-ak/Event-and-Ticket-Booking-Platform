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
import { MessageService } from './message.service';
import { CreateMessageDto, UpdateMessageDto, QueryMessageDto } from './message.dto';

@ApiTags('messages')
@ApiBearerAuth()
@Controller('messages')
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @Post()
  @ApiOperation({ summary: 'Create Message' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateMessageDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Messages' })
  bulkCreate(@Body() dtos: CreateMessageDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Messages' })
  findAll(@Query() query: QueryMessageDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Messages' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Message by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Message' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateMessageDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Message' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateMessageDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Message' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

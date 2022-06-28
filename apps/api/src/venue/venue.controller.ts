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
import { VenueService } from './venue.service';
import { CreateVenueDto, UpdateVenueDto, QueryVenueDto } from './venue.dto';

@ApiTags('venues')
@ApiBearerAuth()
@Controller('venues')
export class VenueController {
  constructor(private readonly service: VenueService) {}

  @Post()
  @ApiOperation({ summary: 'Create Venue' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateVenueDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Venues' })
  bulkCreate(@Body() dtos: CreateVenueDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Venues' })
  findAll(@Query() query: QueryVenueDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Venues' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Venue by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Venue' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateVenueDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Venue' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateVenueDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Venue' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

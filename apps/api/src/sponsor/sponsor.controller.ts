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
import { SponsorService } from './sponsor.service';
import { CreateSponsorDto, UpdateSponsorDto, QuerySponsorDto } from './sponsor.dto';

@ApiTags('sponsors')
@ApiBearerAuth()
@Controller('sponsors')
export class SponsorController {
  constructor(private readonly service: SponsorService) {}

  @Post()
  @ApiOperation({ summary: 'Create Sponsor' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateSponsorDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Sponsors' })
  bulkCreate(@Body() dtos: CreateSponsorDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Sponsors' })
  findAll(@Query() query: QuerySponsorDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Sponsors' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Sponsor by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Sponsor' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateSponsorDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Sponsor' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateSponsorDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Sponsor' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

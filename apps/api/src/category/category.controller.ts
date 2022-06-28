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
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto, QueryCategoryDto } from './category.dto';

@ApiTags('categorys')
@ApiBearerAuth()
@Controller('categorys')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create Category' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateCategoryDto) {
    return this.service.create(dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Bulk create Categorys' })
  bulkCreate(@Body() dtos: CreateCategoryDto[]) {
    return this.service.bulkCreate(dtos);
  }

  @Get()
  @ApiOperation({ summary: 'List Categorys' })
  findAll(@Query() query: QueryCategoryDto) {
    return this.service.findAll(query);
  }

  @Get('count')
  @ApiOperation({ summary: 'Count Categorys' })
  count() {
    return this.service.count();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Category by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Category' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateCategoryDto) {
    return this.service.update(id, dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Replace Category' })
  replace(@Param('id', ParseUUIDPipe) id: string, @Body() dto: CreateCategoryDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete Category' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.remove(id);
  }
}

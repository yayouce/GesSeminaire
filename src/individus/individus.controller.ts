import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndividusService } from './individus.service';
import { CreateIndividusDto } from './dto/create-individus.dto';
import { UpdateIndividusDto } from './dto/update-individus.dto';

@Controller('individus')
export class IndividusController {
  constructor(private readonly individusService: IndividusService) {}

  @Post()
  create(@Body() createIndividusDto: CreateIndividusDto) {
    return this.individusService.create(createIndividusDto);
  }

  @Get()
  findAll() {
    return this.individusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.individusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndividusDto: UpdateIndividusDto) {
    return this.individusService.update(+id, updateIndividusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.individusService.remove(+id);
  }
}

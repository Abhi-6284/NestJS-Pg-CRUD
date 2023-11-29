import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustService } from './cust.service';
import { CreateCustDto } from './dto/create-cust.dto';
import { UpdateCustDto } from './dto/update-cust.dto';

@Controller('cust')
export class CustController {
  constructor(private readonly custService: CustService) {}

  @Post()
  create(@Body() createCustDto: CreateCustDto) {
    return this.custService.create(createCustDto);
  }

  @Get()
  findAll() {
    return this.custService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.custService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustDto: UpdateCustDto) {
    return this.custService.update(+id, updateCustDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.custService.remove(+id);
  }
}

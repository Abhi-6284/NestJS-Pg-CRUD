import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustDto } from './dto/create-cust.dto';
import { UpdateCustDto } from './dto/update-cust.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cust } from './entities/cust.entity';

@Injectable()
export class CustService {
  constructor(
    @InjectRepository(Cust)
    private readonly custRepo: Repository<Cust>,
  ) {}

  async create(createCustDto: CreateCustDto) {
    const cust = this.custRepo.create(createCustDto);
    return await this.custRepo.save(cust);
  }

  async findAll() {
    return await this.custRepo.find();
  }

  async findOne(id: number) {
    return await this.custRepo.findOne({ where: { id } });
  }

  async update(id: number, updateCustDto: UpdateCustDto) {
    const cust = await this.findOne(id);
    if (!cust) {
      throw new NotFoundException();
    }
    Object.assign(cust, updateCustDto);
    return await this.custRepo.save(cust);
  }

  async remove(id: number) {
    const cust = await this.findOne(id);
    if (!cust) {
      throw new NotFoundException();
    }
    return await this.custRepo.remove(cust);
  }
}

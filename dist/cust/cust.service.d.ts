import { CreateCustDto } from './dto/create-cust.dto';
import { UpdateCustDto } from './dto/update-cust.dto';
import { Repository } from 'typeorm';
import { Cust } from './entities/cust.entity';
export declare class CustService {
    private readonly custRepo;
    constructor(custRepo: Repository<Cust>);
    create(createCustDto: CreateCustDto): Promise<Cust>;
    findAll(): Promise<Cust[]>;
    findOne(id: number): Promise<Cust>;
    update(id: number, updateCustDto: UpdateCustDto): Promise<Cust>;
    remove(id: number): Promise<Cust>;
}

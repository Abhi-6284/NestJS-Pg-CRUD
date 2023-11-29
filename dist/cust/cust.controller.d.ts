import { CustService } from './cust.service';
import { CreateCustDto } from './dto/create-cust.dto';
import { UpdateCustDto } from './dto/update-cust.dto';
export declare class CustController {
    private readonly custService;
    constructor(custService: CustService);
    create(createCustDto: CreateCustDto): Promise<import("./entities/cust.entity").Cust>;
    findAll(): Promise<import("./entities/cust.entity").Cust[]>;
    findOne(id: string): Promise<import("./entities/cust.entity").Cust>;
    update(id: string, updateCustDto: UpdateCustDto): Promise<import("./entities/cust.entity").Cust>;
    remove(id: string): Promise<import("./entities/cust.entity").Cust>;
}

import { Test, TestingModule } from '@nestjs/testing';
import { CustController } from './cust.controller';
import { CustService } from './cust.service';

describe('CustController', () => {
  let controller: CustController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustController],
      providers: [CustService],
    }).compile();

    controller = module.get<CustController>(CustController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

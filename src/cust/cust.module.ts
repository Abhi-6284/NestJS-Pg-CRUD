import { Module } from '@nestjs/common';
import { CustService } from './cust.service';
import { CustController } from './cust.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cust } from './entities/cust.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cust])],
  controllers: [CustController],
  providers: [CustService],
})
export class CustModule {}

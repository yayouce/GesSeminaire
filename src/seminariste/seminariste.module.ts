import { Module } from '@nestjs/common';
import { SeminaristeService } from './seminariste.service';
import { SeminaristeController } from './seminariste.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeminaristEntity } from './entities/seminariste.entity';

@Module({

  imports : [TypeOrmModule.forFeature([SeminaristEntity])], 
  controllers: [SeminaristeController],
  providers: [SeminaristeService],
})
export class SeminaristeModule {}

import { Module } from '@nestjs/common';
import { MaterielsService } from './materiels.service';
import { MaterielsController } from './materiels.controller';

@Module({
  controllers: [MaterielsController],
  providers: [MaterielsService],
})
export class MaterielsModule {}

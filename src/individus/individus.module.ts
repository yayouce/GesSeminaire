import { Module } from '@nestjs/common';
import { IndividusService } from './individus.service';
import { IndividusController } from './individus.controller';

@Module({
  controllers: [IndividusController],
  providers: [IndividusService],
})
export class IndividusModule {}

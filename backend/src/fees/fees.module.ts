import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { FeesController } from './fees.controller.js';
import { FeesService } from './fees.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [FeesController],
  providers: [FeesService],
  exports: [FeesService],
})
export class FeesModule {}

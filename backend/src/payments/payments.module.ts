import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { QrModule } from '../qr/qr.module';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports: [PrismaModule, QrModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}

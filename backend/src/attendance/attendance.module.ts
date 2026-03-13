import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { QrModule } from '../qr/qr.module';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';

@Module({
  imports: [PrismaModule, QrModule],
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule {}

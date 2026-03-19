import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { QrModule } from './qr/qr.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PaymentsModule } from './payments/payments.module';
import { FeesModule } from './fees/fees.module';
import { LedgerModule } from './ledger/ledger.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    StudentsModule,
    QrModule,
    AttendanceModule,
    PaymentsModule,
    FeesModule,
    LedgerModule,
    ExpensesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

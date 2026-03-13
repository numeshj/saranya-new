import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtUser } from '../auth/jwt.strategy';
import { PaymentsService } from './payments.service';
import { RecordPaymentByQrDto } from './dto/record-payment-by-qr.dto';

@Controller('payments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PaymentsController {
  constructor(private readonly payments: PaymentsService) {}

  @Post('record-by-qr')
  @Roles('ADMIN', 'STAFF')
  async recordByQr(
    @Body() dto: RecordPaymentByQrDto,
    @Req() req: Request & { user?: JwtUser },
  ) {
    return this.payments.recordByQr({
      qrToken: dto.qrToken,
      classGroupId: dto.classGroupId,
      paidYear: dto.paidYear,
      paidMonth: dto.paidMonth,
      amount: dto.amount,
      isFreeCard: dto.isFreeCard,
      method: dto.method,
      notes: dto.notes,
      createdByUserId: req.user?.sub,
    });
  }

  @Get('students/:studentId')
  @Roles('ADMIN', 'STAFF')
  async listStudentPayments(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Query('classGroupId') classGroupId?: string,
    @Query('paidYear', new ParseIntPipe({ optional: true })) paidYear?: number,
    @Query('paidMonth', new ParseIntPipe({ optional: true })) paidMonth?: number,
  ) {
    return this.payments.listStudentPayments({
      studentId,
      classGroupId,
      paidYear,
      paidMonth,
    });
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtUser } from '../auth/jwt.strategy';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceSessionDto } from './dto/create-attendance-session.dto';
import { MarkAttendanceByQrDto } from './dto/mark-attendance-by-qr.dto';

@Controller('attendance')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AttendanceController {
  constructor(private readonly attendance: AttendanceService) {}

  @Post('sessions')
  @Roles('ADMIN', 'STAFF')
  async createSession(@Body() dto: CreateAttendanceSessionDto) {
    return this.attendance.createSession(dto);
  }

  @Get('sessions/:id')
  @Roles('ADMIN', 'STAFF')
  async getSession(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.attendance.getSession(id);
  }

  @Post('sessions/:id/mark-by-qr')
  @Roles('ADMIN', 'STAFF')
  async markByQr(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: MarkAttendanceByQrDto,
    @Req() req: Request & { user?: JwtUser },
  ) {
    return this.attendance.markByQr({
      sessionId: id,
      qrToken: dto.qrToken,
      markedByUserId: req.user?.sub,
    });
  }
}

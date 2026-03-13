import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { LedgerService } from './ledger.service';

@Controller('ledger')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LedgerController {
  constructor(private readonly ledger: LedgerService) {}

  @Get('students/:studentId/class-groups/:classGroupId')
  @Roles('ADMIN', 'STAFF')
  async getStudentClassGroupLedger(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Param('classGroupId', new ParseUUIDPipe()) classGroupId: string,
    @Query('fromYear', new ParseIntPipe({ optional: true })) fromYear?: number,
    @Query('fromMonth', new ParseIntPipe({ optional: true })) fromMonth?: number,
    @Query('toYear', new ParseIntPipe({ optional: true })) toYear?: number,
    @Query('toMonth', new ParseIntPipe({ optional: true })) toMonth?: number,
  ) {
    return this.ledger.getStudentClassGroupLedger({
      studentId,
      classGroupId,
      fromYear,
      fromMonth,
      toYear,
      toMonth,
    });
  }
}

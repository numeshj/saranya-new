import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { FeesService } from './fees.service';
import { SetClassGroupMonthlyFeeDto } from './dto/set-class-group-monthly-fee.dto';

@Controller('fees')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FeesController {
  constructor(private readonly fees: FeesService) {}

  @Post('class-groups/:classGroupId/monthly')
  @Roles('ADMIN', 'STAFF')
  async setMonthlyFee(
    @Param('classGroupId', new ParseUUIDPipe()) classGroupId: string,
    @Body() dto: SetClassGroupMonthlyFeeDto,
  ) {
    return this.fees.setClassGroupMonthlyFee({
      classGroupId,
      effectiveYear: dto.effectiveYear,
      effectiveMonth: dto.effectiveMonth,
      amount: dto.amount,
    });
  }

  @Get('class-groups/:classGroupId/monthly')
  @Roles('ADMIN', 'STAFF')
  async listMonthlyFees(
    @Param('classGroupId', new ParseUUIDPipe()) classGroupId: string,
  ) {
    return this.fees.listClassGroupMonthlyFees(classGroupId);
  }
}

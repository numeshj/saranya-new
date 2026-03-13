import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ScanQrDto } from './dto/scan-qr.dto';
import { QrService } from './qr.service';

@Controller('qr')
@UseGuards(JwtAuthGuard, RolesGuard)
export class QrController {
  constructor(private readonly qr: QrService) {}

  @Post('scan')
  @Roles('ADMIN', 'STAFF')
  scan(@Body() dto: ScanQrDto) {
    return this.qr.scan(dto.token);
  }
}

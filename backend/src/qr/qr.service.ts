import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QrService {
  constructor(private readonly prisma: PrismaService) {}

  async scan(token: string) {
    const qr = await this.prisma.studentQrToken.findFirst({
      where: { token, isActive: true },
      include: {
        student: {
          select: { id: true, fullName: true, phone: true, isActive: true },
        },
      },
    });

    if (!qr || !qr.student.isActive) {
      throw new NotFoundException('QR not found or inactive');
    }

    return {
      student: qr.student,
    };
  }
}

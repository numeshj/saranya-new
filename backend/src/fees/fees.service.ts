import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FeesService {
  constructor(private readonly prisma: PrismaService) {}

  async setClassGroupMonthlyFee(params: {
    classGroupId: string;
    effectiveYear: number;
    effectiveMonth: number;
    amount: string;
  }) {
    if (params.effectiveMonth < 1 || params.effectiveMonth > 12) {
      throw new BadRequestException('Invalid effectiveMonth');
    }

    if (params.effectiveYear < 2000 || params.effectiveYear > 2100) {
      throw new BadRequestException('Invalid effectiveYear');
    }

    const classGroup = await this.prisma.classGroup.findUnique({
      where: { id: params.classGroupId },
      select: { id: true, isActive: true },
    });

    if (!classGroup || !classGroup.isActive) {
      throw new NotFoundException('Class group not found or inactive');
    }

    const amount = new Prisma.Decimal(params.amount);
    if (amount.lessThan(0)) {
      throw new BadRequestException('amount must be >= 0');
    }

    return this.prisma.classGroupMonthlyFee.upsert({
      where: {
        classGroupId_effectiveYear_effectiveMonth: {
          classGroupId: params.classGroupId,
          effectiveYear: params.effectiveYear,
          effectiveMonth: params.effectiveMonth,
        },
      },
      create: {
        classGroupId: params.classGroupId,
        effectiveYear: params.effectiveYear,
        effectiveMonth: params.effectiveMonth,
        amount,
      },
      update: {
        amount,
      },
      select: {
        id: true,
        classGroupId: true,
        effectiveYear: true,
        effectiveMonth: true,
        amount: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async listClassGroupMonthlyFees(classGroupId: string) {
    return this.prisma.classGroupMonthlyFee.findMany({
      where: { classGroupId },
      orderBy: [{ effectiveYear: 'asc' }, { effectiveMonth: 'asc' }],
      select: {
        id: true,
        classGroupId: true,
        effectiveYear: true,
        effectiveMonth: true,
        amount: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}

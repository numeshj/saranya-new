import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PaymentMethod, PaymentSource, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { QrService } from '../qr/qr.service';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly qrService: QrService,
  ) {}

  private getMonthAnchorDateUTC(paidYear: number, paidMonth: number): Date {
    return new Date(Date.UTC(paidYear, paidMonth - 1, 1));
  }

  async recordByQr(params: {
    qrToken: string;
    classGroupId: string;
    paidYear: number;
    paidMonth: number;
    amount?: string;
    isFreeCard?: boolean;
    method?: PaymentMethod;
    notes?: string;
    createdByUserId?: string;
  }) {
    if (params.paidMonth < 1 || params.paidMonth > 12) {
      throw new BadRequestException('Invalid paidMonth');
    }

    if (params.paidYear < 2000 || params.paidYear > 2100) {
      throw new BadRequestException('Invalid paidYear');
    }

    const { student } = await this.qrService.scan(params.qrToken);

    const anchorDate = this.getMonthAnchorDateUTC(params.paidYear, params.paidMonth);

    const enrollment = await this.prisma.enrollment.findFirst({
      where: {
        studentId: student.id,
        classGroupId: params.classGroupId,
        isActive: true,
        startDate: { lte: anchorDate },
        OR: [{ endDate: null }, { endDate: { gte: anchorDate } }],
      },
      select: { id: true },
    });

    if (!enrollment) {
      throw new BadRequestException('Student is not enrolled in this class');
    }

    const isFreeCard = Boolean(params.isFreeCard);
    const method = params.method ?? PaymentMethod.CASH;

    let amount = new Prisma.Decimal(0);
    if (!isFreeCard) {
      if (!params.amount) {
        throw new BadRequestException('amount is required unless free card');
      }

      amount = new Prisma.Decimal(params.amount);
      if (amount.lessThanOrEqualTo(0)) {
        throw new BadRequestException('amount must be > 0');
      }
    }

    try {
      const payment = await this.prisma.payment.create({
        data: {
          studentId: student.id,
          classGroupId: params.classGroupId,
          paidYear: params.paidYear,
          paidMonth: params.paidMonth,
          amount,
          isFreeCard,
          method,
          source: PaymentSource.QR_SCAN,
          notes: params.notes,
          createdByUserId: params.createdByUserId ?? null,
        },
        select: {
          id: true,
          paidYear: true,
          paidMonth: true,
          amount: true,
          isFreeCard: true,
          method: true,
          source: true,
          notes: true,
          createdAt: true,
        },
      });

      return {
        alreadyPaid: false,
        student,
        payment,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const existing = await this.prisma.payment.findUnique({
          where: {
            studentId_classGroupId_paidYear_paidMonth: {
              studentId: student.id,
              classGroupId: params.classGroupId,
              paidYear: params.paidYear,
              paidMonth: params.paidMonth,
            },
          },
          select: {
            id: true,
            paidYear: true,
            paidMonth: true,
            amount: true,
            isFreeCard: true,
            method: true,
            source: true,
            notes: true,
            createdAt: true,
          },
        });

        if (!existing) {
          throw new NotFoundException('Payment exists but could not be loaded');
        }

        return {
          alreadyPaid: true,
          student,
          payment: existing,
        };
      }

      throw error;
    }
  }

  async listStudentPayments(params: {
    studentId: string;
    classGroupId?: string;
    paidYear?: number;
    paidMonth?: number;
  }) {
    return this.prisma.payment.findMany({
      where: {
        studentId: params.studentId,
        classGroupId: params.classGroupId,
        paidYear: params.paidYear,
        paidMonth: params.paidMonth,
      },
      orderBy: [{ paidYear: 'desc' }, { paidMonth: 'desc' }, { createdAt: 'desc' }],
      select: {
        id: true,
        paidYear: true,
        paidMonth: true,
        amount: true,
        isFreeCard: true,
        method: true,
        source: true,
        notes: true,
        createdAt: true,
        classGroup: {
          select: {
            id: true,
            name: true,
            grade: { select: { id: true, name: true } },
          },
        },
      },
    });
  }
}

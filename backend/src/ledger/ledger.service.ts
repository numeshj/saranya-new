import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type YearMonth = { year: number; month: number };

function compareYearMonth(a: YearMonth, b: YearMonth): number {
  if (a.year !== b.year) return a.year - b.year;
  return a.month - b.month;
}

function nextMonth(ym: YearMonth): YearMonth {
  if (ym.month === 12) return { year: ym.year + 1, month: 1 };
  return { year: ym.year, month: ym.month + 1 };
}

function toYearMonthUTC(date: Date): YearMonth {
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1 };
}

function monthStartUTC(ym: YearMonth): Date {
  return new Date(Date.UTC(ym.year, ym.month - 1, 1));
}

@Injectable()
export class LedgerService {
  constructor(private readonly prisma: PrismaService) {}

  private getFeeForMonth(
    feeRows: Array<{ effectiveYear: number; effectiveMonth: number; amount: Prisma.Decimal }>,
    ym: YearMonth,
  ): Prisma.Decimal | null {
    let current: Prisma.Decimal | null = null;

    for (const row of feeRows) {
      const rowYm: YearMonth = { year: row.effectiveYear, month: row.effectiveMonth };
      if (compareYearMonth(rowYm, ym) <= 0) {
        current = row.amount;
      } else {
        break;
      }
    }

    return current;
  }

  async getStudentClassGroupLedger(params: {
    studentId: string;
    classGroupId: string;
    fromYear?: number;
    fromMonth?: number;
    toYear?: number;
    toMonth?: number;
  }) {
    const student = await this.prisma.student.findUnique({
      where: { id: params.studentId },
      select: { id: true, fullName: true, phone: true, isActive: true },
    });

    if (!student || !student.isActive) {
      throw new NotFoundException('Student not found or inactive');
    }

    const classGroup = await this.prisma.classGroup.findUnique({
      where: { id: params.classGroupId },
      select: {
        id: true,
        name: true,
        isActive: true,
        grade: { select: { id: true, name: true } },
      },
    });

    if (!classGroup || !classGroup.isActive) {
      throw new NotFoundException('Class group not found or inactive');
    }

    const enrollment = await this.prisma.enrollment.findFirst({
      where: {
        studentId: params.studentId,
        classGroupId: params.classGroupId,
        isActive: true,
      },
      orderBy: { startDate: 'asc' },
      select: {
        id: true,
        startDate: true,
        endDate: true,
        isActive: true,
      },
    });

    if (!enrollment) {
      throw new BadRequestException('Student is not enrolled in this class');
    }

    const feeRows = await this.prisma.classGroupMonthlyFee.findMany({
      where: { classGroupId: params.classGroupId },
      orderBy: [{ effectiveYear: 'asc' }, { effectiveMonth: 'asc' }],
      select: { effectiveYear: true, effectiveMonth: true, amount: true },
    });

    const nowYm = toYearMonthUTC(new Date());

    const enrollmentStartYm = toYearMonthUTC(enrollment.startDate);
    const enrollmentEndYm = enrollment.endDate ? toYearMonthUTC(enrollment.endDate) : null;

    const requestedFrom: YearMonth | null =
      params.fromYear && params.fromMonth
        ? { year: params.fromYear, month: params.fromMonth }
        : null;

    const requestedTo: YearMonth | null =
      params.toYear && params.toMonth ? { year: params.toYear, month: params.toMonth } : null;

    const fromYm = requestedFrom
      ? compareYearMonth(requestedFrom, enrollmentStartYm) < 0
        ? enrollmentStartYm
        : requestedFrom
      : enrollmentStartYm;

    const maxTo = requestedTo ?? nowYm;
    const boundedTo = enrollmentEndYm && compareYearMonth(enrollmentEndYm, maxTo) < 0 ? enrollmentEndYm : maxTo;

    if (fromYm.month < 1 || fromYm.month > 12) {
      throw new BadRequestException('Invalid fromMonth');
    }
    if (boundedTo.month < 1 || boundedTo.month > 12) {
      throw new BadRequestException('Invalid toMonth');
    }

    if (compareYearMonth(fromYm, boundedTo) > 0) {
      return {
        student,
        classGroup,
        range: { from: fromYm, to: boundedTo },
        rows: [],
        totals: {
          totalDue: new Prisma.Decimal(0),
          totalPaid: new Prisma.Decimal(0),
          arrears: new Prisma.Decimal(0),
        },
      };
    }

    const payments = await this.prisma.payment.findMany({
      where: {
        studentId: params.studentId,
        classGroupId: params.classGroupId,
        paidYear: { gte: fromYm.year, lte: boundedTo.year },
      },
      select: {
        id: true,
        paidYear: true,
        paidMonth: true,
        amount: true,
        isFreeCard: true,
        method: true,
        source: true,
        createdAt: true,
      },
    });

    const paymentByMonth = new Map<string, (typeof payments)[number]>();
    for (const p of payments) {
      paymentByMonth.set(`${p.paidYear}-${p.paidMonth}`, p);
    }

    const rows: Array<{
      year: number;
      month: number;
      fee: Prisma.Decimal;
      amountDue: Prisma.Decimal;
      amountPaid: Prisma.Decimal;
      arrears: Prisma.Decimal;
      status: 'UNPAID' | 'PAID' | 'FREE_CARD' | 'PARTIAL' | 'OVERPAID';
      payment?: (typeof payments)[number];
    }> = [];

    let totalDue = new Prisma.Decimal(0);
    let totalPaid = new Prisma.Decimal(0);
    let totalArrears = new Prisma.Decimal(0);

    for (let ym = fromYm; compareYearMonth(ym, boundedTo) <= 0; ym = nextMonth(ym)) {
      const fee = this.getFeeForMonth(feeRows, ym);
      if (!fee) {
        throw new BadRequestException(
          `Monthly fee not configured for ${ym.year}-${String(ym.month).padStart(2, '0')}`,
        );
      }

      const payment = paymentByMonth.get(`${ym.year}-${ym.month}`);
      const amountPaid = payment ? payment.amount : new Prisma.Decimal(0);

      const amountDue = payment?.isFreeCard ? new Prisma.Decimal(0) : fee;

      const diff = amountDue.minus(amountPaid);
      const arrears = diff.greaterThan(0) ? diff : new Prisma.Decimal(0);

      let status: (typeof rows)[number]['status'] = 'UNPAID';
      if (payment?.isFreeCard) status = 'FREE_CARD';
      else if (amountPaid.equals(0)) status = 'UNPAID';
      else if (diff.equals(0)) status = 'PAID';
      else if (diff.greaterThan(0)) status = 'PARTIAL';
      else status = 'OVERPAID';

      totalDue = totalDue.plus(amountDue);
      totalPaid = totalPaid.plus(amountPaid);
      totalArrears = totalArrears.plus(arrears);

      rows.push({
        year: ym.year,
        month: ym.month,
        fee,
        amountDue,
        amountPaid,
        arrears,
        status,
        payment: payment ?? undefined,
      });
    }

    return {
      student,
      classGroup,
      range: { from: fromYm, to: boundedTo },
      enrollment: {
        id: enrollment.id,
        startDate: enrollment.startDate,
        endDate: enrollment.endDate,
      },
      rows,
      totals: {
        totalDue,
        totalPaid,
        arrears: totalArrears,
      },
    };
  }

  async getClassGroupArrearsForMonth(params: {
    classGroupId: string;
    year: number;
    month: number;
  }) {
    if (params.month < 1 || params.month > 12) {
      throw new BadRequestException('Invalid month');
    }
    if (params.year < 2000 || params.year > 2100) {
      throw new BadRequestException('Invalid year');
    }

    const classGroup = await this.prisma.classGroup.findUnique({
      where: { id: params.classGroupId },
      select: {
        id: true,
        name: true,
        isActive: true,
        grade: { select: { id: true, name: true } },
      },
    });

    if (!classGroup || !classGroup.isActive) {
      throw new NotFoundException('Class group not found or inactive');
    }

    const feeRow = await this.prisma.classGroupMonthlyFee.findFirst({
      where: {
        classGroupId: params.classGroupId,
        OR: [
          { effectiveYear: { lt: params.year } },
          { effectiveYear: params.year, effectiveMonth: { lte: params.month } },
        ],
      },
      orderBy: [{ effectiveYear: 'desc' }, { effectiveMonth: 'desc' }],
      select: { effectiveYear: true, effectiveMonth: true, amount: true },
    });

    if (!feeRow) {
      throw new BadRequestException(
        `Monthly fee not configured for ${params.year}-${String(params.month).padStart(2, '0')}`,
      );
    }

    const monthAnchor = new Date(Date.UTC(params.year, params.month - 1, 1));

    const enrollments = await this.prisma.enrollment.findMany({
      where: {
        classGroupId: params.classGroupId,
        isActive: true,
        startDate: { lte: monthAnchor },
        OR: [{ endDate: null }, { endDate: { gte: monthAnchor } }],
        student: { isActive: true },
      },
      select: {
        id: true,
        student: { select: { id: true, fullName: true, phone: true } },
      },
    });

    const payments = await this.prisma.payment.findMany({
      where: {
        classGroupId: params.classGroupId,
        paidYear: params.year,
        paidMonth: params.month,
      },
      select: {
        id: true,
        studentId: true,
        amount: true,
        isFreeCard: true,
        method: true,
        source: true,
        createdAt: true,
      },
    });

    const paymentByStudentId = new Map<string, (typeof payments)[number]>();
    for (const p of payments) {
      paymentByStudentId.set(p.studentId, p);
    }

    const fee = feeRow.amount;
    const rows: Array<{
      student: { id: string; fullName: string; phone: string | null };
      fee: Prisma.Decimal;
      amountDue: Prisma.Decimal;
      amountPaid: Prisma.Decimal;
      arrears: Prisma.Decimal;
      status: 'UNPAID' | 'PAID' | 'FREE_CARD' | 'PARTIAL' | 'OVERPAID';
      payment?: (typeof payments)[number];
    }> = [];

    let totalDue = new Prisma.Decimal(0);
    let totalPaid = new Prisma.Decimal(0);
    let totalArrears = new Prisma.Decimal(0);

    for (const e of enrollments) {
      const payment = paymentByStudentId.get(e.student.id);
      const amountPaid = payment ? payment.amount : new Prisma.Decimal(0);
      const amountDue = payment?.isFreeCard ? new Prisma.Decimal(0) : fee;
      const diff = amountDue.minus(amountPaid);
      const arrears = diff.greaterThan(0) ? diff : new Prisma.Decimal(0);

      let status: (typeof rows)[number]['status'] = 'UNPAID';
      if (payment?.isFreeCard) status = 'FREE_CARD';
      else if (amountPaid.equals(0)) status = 'UNPAID';
      else if (diff.equals(0)) status = 'PAID';
      else if (diff.greaterThan(0)) status = 'PARTIAL';
      else status = 'OVERPAID';

      totalDue = totalDue.plus(amountDue);
      totalPaid = totalPaid.plus(amountPaid);
      totalArrears = totalArrears.plus(arrears);

      if (arrears.greaterThan(0)) {
        rows.push({
          student: e.student,
          fee,
          amountDue,
          amountPaid,
          arrears,
          status,
          payment: payment ?? undefined,
        });
      }
    }

    rows.sort((a, b) => b.arrears.comparedTo(a.arrears));

    return {
      classGroup,
      month: { year: params.year, month: params.month },
      feeAppliedFrom: { year: feeRow.effectiveYear, month: feeRow.effectiveMonth },
      fee,
      rows,
      totals: {
        studentsEnrolled: enrollments.length,
        studentsInArrears: rows.length,
        totalDue,
        totalPaid,
        totalArrears,
      },
    };
  }
}

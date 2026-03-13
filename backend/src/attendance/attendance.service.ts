import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, AttendanceSource } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { QrService } from '../qr/qr.service';

@Injectable()
export class AttendanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly qrService: QrService,
  ) {}

  private parseDateOrToday(dateString?: string): Date {
    if (!dateString) {
      const now = new Date();
      return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    }

    const parsed = new Date(dateString);
    if (Number.isNaN(parsed.getTime())) {
      throw new BadRequestException('Invalid date');
    }

    return parsed;
  }

  async createSession(input: {
    classGroupId: string;
    sessionDate?: string;
    startsAt?: string;
    notes?: string;
  }) {
    const sessionDate = this.parseDateOrToday(input.sessionDate);
    const startsAt = input.startsAt ? this.parseDateOrToday(input.startsAt) : null;

    return this.prisma.attendanceSession.upsert({
      where: {
        classGroupId_sessionDate: {
          classGroupId: input.classGroupId,
          sessionDate,
        },
      },
      create: {
        classGroupId: input.classGroupId,
        sessionDate,
        startsAt,
        notes: input.notes,
      },
      update: {
        startsAt: startsAt ?? undefined,
        notes: input.notes ?? undefined,
      },
      include: {
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

  async getSession(sessionId: string) {
    const session = await this.prisma.attendanceSession.findUnique({
      where: { id: sessionId },
      include: {
        classGroup: {
          select: {
            id: true,
            name: true,
            grade: { select: { id: true, name: true } },
          },
        },
        marks: {
          orderBy: { markedAt: 'asc' },
          select: {
            id: true,
            markedAt: true,
            source: true,
            student: { select: { id: true, fullName: true, phone: true } },
            markedByUserId: true,
          },
        },
      },
    });

    if (!session) {
      throw new NotFoundException('Attendance session not found');
    }

    return session;
  }

  async markByQr(params: {
    sessionId: string;
    qrToken: string;
    markedByUserId?: string;
  }) {
    const session = await this.prisma.attendanceSession.findUnique({
      where: { id: params.sessionId },
      select: { id: true, classGroupId: true, sessionDate: true, isCancelled: true },
    });

    if (!session) {
      throw new NotFoundException('Attendance session not found');
    }

    if (session.isCancelled) {
      throw new BadRequestException('Attendance session is cancelled');
    }

    const { student } = await this.qrService.scan(params.qrToken);

    const isEnrolled = await this.prisma.enrollment.findFirst({
      where: {
        studentId: student.id,
        classGroupId: session.classGroupId,
        isActive: true,
        startDate: { lte: session.sessionDate },
        OR: [{ endDate: null }, { endDate: { gte: session.sessionDate } }],
      },
      select: { id: true },
    });

    if (!isEnrolled) {
      throw new BadRequestException('Student is not enrolled in this class');
    }

    try {
      const mark = await this.prisma.attendanceMark.create({
        data: {
          sessionId: session.id,
          studentId: student.id,
          source: AttendanceSource.QR_SCAN,
          markedByUserId: params.markedByUserId ?? null,
        },
        select: {
          id: true,
          markedAt: true,
          source: true,
        },
      });

      return {
        alreadyMarked: false,
        student,
        mark,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const existing = await this.prisma.attendanceMark.findUnique({
          where: {
            sessionId_studentId: {
              sessionId: session.id,
              studentId: student.id,
            },
          },
          select: { id: true, markedAt: true, source: true },
        });

        return {
          alreadyMarked: true,
          student,
          mark: existing,
        };
      }

      throw error;
    }
  }
}

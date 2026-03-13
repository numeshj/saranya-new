import { Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async createStudent(input: { fullName: string; phone?: string }) {
    return this.prisma.student.create({
      data: {
        fullName: input.fullName,
        phone: input.phone,
      },
      select: {
        id: true,
        fullName: true,
        phone: true,
        isActive: true,
        createdAt: true,
      },
    });
  }

  async getStudentById(id: string) {
    const student = await this.prisma.student.findUnique({
      where: { id },
      select: {
        id: true,
        fullName: true,
        phone: true,
        isActive: true,
        createdAt: true,
      },
    });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  async issueNewQrToken(studentId: string) {
    const student = await this.prisma.student.findUnique({
      where: { id: studentId },
      select: { id: true },
    });
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    const token = randomBytes(18).toString('hex');

    await this.prisma.$transaction([
      this.prisma.studentQrToken.updateMany({
        where: { studentId, isActive: true },
        data: { isActive: false, replacedAt: new Date() },
      }),
      this.prisma.studentQrToken.create({
        data: { studentId, token, isActive: true },
      }),
    ]);

    return { studentId, token };
  }
}

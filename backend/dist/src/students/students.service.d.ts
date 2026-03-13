import { PrismaService } from '../prisma/prisma.service';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createStudent(input: {
        fullName: string;
        phone?: string;
    }): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        fullName: string;
        phone: string | null;
    }>;
    getStudentById(id: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        fullName: string;
        phone: string | null;
    }>;
    issueNewQrToken(studentId: string): Promise<{
        studentId: string;
        token: string;
    }>;
}

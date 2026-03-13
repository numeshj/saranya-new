import { PrismaService } from '../prisma/prisma.service';
export declare class QrService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    scan(token: string): Promise<{
        student: {
            id: string;
            isActive: boolean;
            fullName: string;
            phone: string | null;
        };
    }>;
}

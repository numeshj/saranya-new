import { UserRole } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(input: {
        email: string;
        password: string;
        role: UserRole;
    }): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
        isActive: boolean;
        createdAt: Date;
    }>;
    getUserById(id: string): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
        isActive: boolean;
    }>;
}

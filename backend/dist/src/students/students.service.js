"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
let StudentsService = class StudentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createStudent(input) {
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
    async getStudentById(id) {
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
            throw new common_1.NotFoundException('Student not found');
        }
        return student;
    }
    async issueNewQrToken(studentId) {
        const student = await this.prisma.student.findUnique({
            where: { id: studentId },
            select: { id: true },
        });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        const token = (0, crypto_1.randomBytes)(18).toString('hex');
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
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentsService);
//# sourceMappingURL=students.service.js.map
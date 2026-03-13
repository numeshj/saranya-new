import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly students;
    constructor(students: StudentsService);
    create(dto: CreateStudentDto): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        fullName: string;
        phone: string | null;
    }>;
    get(id: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        fullName: string;
        phone: string | null;
    }>;
    issueQr(id: string): Promise<{
        studentId: string;
        token: string;
    }>;
}

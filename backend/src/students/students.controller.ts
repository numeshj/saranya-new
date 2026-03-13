import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
@UseGuards(JwtAuthGuard, RolesGuard)
export class StudentsController {
  constructor(private readonly students: StudentsService) {}

  @Post()
  @Roles('ADMIN', 'STAFF')
  create(@Body() dto: CreateStudentDto) {
    return this.students.createStudent(dto);
  }

  @Get(':id')
  @Roles('ADMIN', 'STAFF')
  get(@Param('id') id: string) {
    return this.students.getStudentById(id);
  }

  @Post(':id/qr/issue')
  @Roles('ADMIN', 'STAFF')
  issueQr(@Param('id') id: string) {
    return this.students.issueNewQrToken(id);
  }
}

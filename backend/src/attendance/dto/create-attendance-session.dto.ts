import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAttendanceSessionDto {
  @IsUUID()
  classGroupId!: string;

  @IsOptional()
  @IsDateString()
  sessionDate?: string;

  @IsOptional()
  @IsDateString()
  startsAt?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

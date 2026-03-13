import { IsString, MinLength } from 'class-validator';

export class MarkAttendanceByQrDto {
  @IsString()
  @MinLength(8)
  qrToken!: string;
}

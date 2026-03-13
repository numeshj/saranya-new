import { IsString, MinLength } from 'class-validator';

export class ScanQrDto {
  @IsString()
  @MinLength(10)
  token!: string;
}

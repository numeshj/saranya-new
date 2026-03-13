import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsIn(['ADMIN', 'STAFF', 'PARENT_STUDENT'])
  role!: 'ADMIN' | 'STAFF' | 'PARENT_STUDENT';
}

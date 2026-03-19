import { IsString, MinLength } from 'class-validator';

export class CreateExpenseCategoryDto {
  @IsString()
  @MinLength(2)
  name!: string;
}

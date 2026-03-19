import {
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';

export class UpdateExpenseDto {
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @IsOptional()
  @IsString()
  @Matches(/^(\d+)(\.\d{1,2})?$/)
  amount?: string;

  @IsOptional()
  @IsIn(['CASH', 'CARD', 'BANK_TRANSFER'])
  method?: 'CASH' | 'CARD' | 'BANK_TRANSFER';

  @IsOptional()
  @IsDateString()
  expenseDate?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

import {
  IsBoolean,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class RecordPaymentByQrDto {
  @IsString()
  qrToken!: string;

  @IsUUID()
  classGroupId!: string;

  @IsInt()
  @Min(2000)
  @Max(2100)
  paidYear!: number;

  @IsInt()
  @Min(1)
  @Max(12)
  paidMonth!: number;

  @IsOptional()
  @IsString()
  @Matches(/^(\d+)(\.\d{1,2})?$/)
  amount?: string;

  @IsOptional()
  @IsBoolean()
  isFreeCard?: boolean;

  @IsOptional()
  @IsString()
  @IsIn(['CASH', 'CARD', 'BANK_TRANSFER'])
  method?: 'CASH' | 'CARD' | 'BANK_TRANSFER';

  @IsOptional()
  @IsString()
  notes?: string;
}

import { IsInt, IsString, Matches, Max, Min } from 'class-validator';

export class SetClassGroupMonthlyFeeDto {
  @IsInt()
  @Min(2000)
  @Max(2100)
  effectiveYear!: number;

  @IsInt()
  @Min(1)
  @Max(12)
  effectiveMonth!: number;

  @IsString()
  @Matches(/^(\d+)(\.\d{1,2})?$/)
  amount!: string;
}

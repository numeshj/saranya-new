import { apiFetch } from './http';

export type MonthlyFee = {
  id: string;
  classGroupId: string;
  effectiveYear: number;
  effectiveMonth: number;
  amount: string;
  createdAt: string;
  updatedAt: string;
};

export async function setMonthlyFee(
  token: string,
  input: { classGroupId: string; effectiveYear: number; effectiveMonth: number; amount: string },
): Promise<MonthlyFee> {
  return apiFetch<MonthlyFee>(`/fees/class-groups/${input.classGroupId}/monthly`, {
    method: 'POST',
    token,
    body: {
      effectiveYear: input.effectiveYear,
      effectiveMonth: input.effectiveMonth,
      amount: input.amount,
    },
  });
}

export async function listMonthlyFees(token: string, classGroupId: string): Promise<MonthlyFee[]> {
  return apiFetch<MonthlyFee[]>(`/fees/class-groups/${classGroupId}/monthly`, { token });
}

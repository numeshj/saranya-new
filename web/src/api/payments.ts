import { apiFetch } from './http';

export type PaymentMethod = 'CASH' | 'CARD' | 'BANK_TRANSFER';

export type Payment = {
  id: string;
  paidYear: number;
  paidMonth: number;
  amount: string;
  isFreeCard: boolean;
  method: PaymentMethod;
  source: string;
  notes: string | null;
  createdAt: string;
};

export async function recordPaymentByQr(
  token: string,
  input: {
    qrToken: string;
    classGroupId: string;
    paidYear: number;
    paidMonth: number;
    amount?: string;
    isFreeCard?: boolean;
    method?: PaymentMethod;
    notes?: string;
  },
): Promise<{ alreadyPaid: boolean; student: { id: string; fullName: string; phone: string | null; isActive: boolean }; payment: Payment }> {
  return apiFetch('/payments/record-by-qr', { method: 'POST', token, body: input });
}

export type StudentPayment = Payment & {
  classGroup: { id: string; name: string; grade: { id: string; name: string } };
};

export async function listStudentPayments(
  token: string,
  input: { studentId: string; classGroupId?: string; paidYear?: number; paidMonth?: number },
): Promise<StudentPayment[]> {
  return apiFetch<StudentPayment[]>(`/payments/students/${input.studentId}`, {
    token,
    query: {
      classGroupId: input.classGroupId,
      paidYear: input.paidYear,
      paidMonth: input.paidMonth,
    },
  });
}

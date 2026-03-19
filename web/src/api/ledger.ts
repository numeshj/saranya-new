import { apiFetch } from './http';

export type LedgerStatus = 'UNPAID' | 'PAID' | 'FREE_CARD' | 'PARTIAL' | 'OVERPAID';

export type StudentLedgerResponse = {
  student: { id: string; fullName: string; phone: string | null; isActive: boolean };
  classGroup: { id: string; name: string; isActive: boolean; grade: { id: string; name: string } };
  enrollment?: { id: string; startDate: string; endDate: string | null };
  range: { from: { year: number; month: number }; to: { year: number; month: number } };
  rows: Array<{
    year: number;
    month: number;
    fee: string;
    amountDue: string;
    amountPaid: string;
    arrears: string;
    status: LedgerStatus;
    payment?: { id: string; paidYear: number; paidMonth: number; amount: string; isFreeCard: boolean; method: string; source: string; createdAt: string };
  }>;
  totals: { totalDue: string; totalPaid: string; arrears: string };
};

export async function getStudentLedger(
  token: string,
  input: {
    studentId: string;
    classGroupId: string;
    fromYear?: number;
    fromMonth?: number;
    toYear?: number;
    toMonth?: number;
  },
): Promise<StudentLedgerResponse> {
  return apiFetch<StudentLedgerResponse>(
    `/ledger/students/${input.studentId}/class-groups/${input.classGroupId}`,
    {
      token,
      query: {
        fromYear: input.fromYear,
        fromMonth: input.fromMonth,
        toYear: input.toYear,
        toMonth: input.toMonth,
      },
    },
  );
}

export type ClassGroupArrearsResponse = {
  classGroup: { id: string; name: string; isActive: boolean; grade: { id: string; name: string } };
  month: { year: number; month: number };
  feeAppliedFrom: { year: number; month: number };
  fee: string;
  rows: Array<{
    student: { id: string; fullName: string; phone: string | null };
    fee: string;
    amountDue: string;
    amountPaid: string;
    arrears: string;
    status: LedgerStatus;
    payment?: { id: string; studentId: string; amount: string; isFreeCard: boolean; method: string; source: string; createdAt: string };
  }>;
  totals: {
    studentsEnrolled: number;
    studentsInArrears: number;
    totalDue: string;
    totalPaid: string;
    totalArrears: string;
  };
};

export async function getClassGroupArrears(
  token: string,
  input: { classGroupId: string; year: number; month: number },
): Promise<ClassGroupArrearsResponse> {
  return apiFetch<ClassGroupArrearsResponse>(`/ledger/class-groups/${input.classGroupId}/arrears`, {
    token,
    query: { year: input.year, month: input.month },
  });
}

import { apiFetch } from './http';

export type PaymentMethod = 'CASH' | 'CARD' | 'BANK_TRANSFER';

export type ExpenseCategory = {
  id: string;
  name: string;
  isActive: boolean;
};

export type Expense = {
  id: string;
  expenseDate: string;
  amount: string;
  method: PaymentMethod;
  notes?: string | null;
  createdAt: string;
  category: { id: string; name: string };
};

export type ExpensesSummary = {
  filters: {
    from: string | null;
    to: string | null;
    categoryId: string | null;
  };
  totals: {
    count: number;
    amount: string;
  };
  byCategory: Array<{
    categoryId: string;
    categoryName: string | null;
    count: number;
    amount: string;
  }>;
  byMethod: Array<{
    method: PaymentMethod;
    count: number;
    amount: string;
  }>;
};

export async function listCategories(token: string): Promise<ExpenseCategory[]> {
  return apiFetch<ExpenseCategory[]>('/expenses/categories', { token });
}

export async function createCategory(token: string, name: string) {
  return apiFetch('/expenses/categories', {
    method: 'POST',
    token,
    body: { name },
  });
}

export async function listExpenses(
  token: string,
  params: { from?: string; to?: string; categoryId?: string; limit?: number },
): Promise<Expense[]> {
  return apiFetch<Expense[]>('/expenses', { token, query: params });
}

export async function createExpense(
  token: string,
  input: {
    categoryId: string;
    amount: string;
    method?: PaymentMethod;
    expenseDate?: string;
    notes?: string;
  },
) {
  return apiFetch('/expenses', {
    method: 'POST',
    token,
    body: input,
  });
}

export async function getSummary(
  token: string,
  params: { from?: string; to?: string; categoryId?: string },
): Promise<ExpensesSummary> {
  return apiFetch<ExpensesSummary>('/expenses/summary', { token, query: params });
}

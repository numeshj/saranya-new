import { apiFetch } from './http';

export type Student = {
  id: string;
  fullName: string;
  phone: string | null;
  isActive: boolean;
  createdAt: string;
};

export async function createStudent(
  token: string,
  input: { fullName: string; phone?: string },
): Promise<Student> {
  return apiFetch<Student>('/students', { method: 'POST', token, body: input });
}

export async function getStudent(token: string, id: string): Promise<Student> {
  return apiFetch<Student>(`/students/${id}`, { token });
}

export async function issueStudentQr(token: string, id: string): Promise<{ studentId: string; token: string }> {
  return apiFetch<{ studentId: string; token: string }>(`/students/${id}/qr/issue`, {
    method: 'POST',
    token,
  });
}

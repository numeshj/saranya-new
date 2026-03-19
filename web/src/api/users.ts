import { apiFetch } from './http';

export type UserRole = 'ADMIN' | 'STAFF' | 'PARENT_STUDENT';

export type User = {
  id: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
};

export async function createUser(
  token: string,
  input: { email: string; password: string; role: UserRole },
): Promise<User> {
  return apiFetch<User>('/users', { method: 'POST', token, body: input });
}

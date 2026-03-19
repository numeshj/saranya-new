import { apiFetch } from './http';

export type LoginResponse = { accessToken: string };

export type JwtUser = {
  sub: string;
  email: string;
  role: string;
};

export async function login(email: string, password: string): Promise<LoginResponse> {
  return apiFetch<LoginResponse>('/auth/login', {
    method: 'POST',
    body: { email, password },
  });
}

export async function me(token: string): Promise<{ user: JwtUser }> {
  return apiFetch<{ user: JwtUser }>('/auth/me', { token });
}

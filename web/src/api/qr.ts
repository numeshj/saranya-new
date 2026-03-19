import { apiFetch } from './http';
import type { Student } from './students';

export async function scanQr(token: string, qrToken: string): Promise<{ student: Student }> {
  return apiFetch<{ student: Student }>('/qr/scan', { method: 'POST', token, body: { token: qrToken } });
}

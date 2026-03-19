import { apiFetch } from './http';

export type AttendanceSession = {
  id: string;
  classGroupId: string;
  sessionDate: string;
  startsAt: string | null;
  notes: string | null;
  isCancelled: boolean;
  createdAt: string;
  updatedAt: string;
  classGroup: {
    id: string;
    name: string;
    grade: { id: string; name: string };
  };
};

export type AttendanceSessionDetails = AttendanceSession & {
  marks: Array<{
    id: string;
    markedAt: string;
    source: string;
    markedByUserId: string | null;
    student: { id: string; fullName: string; phone: string | null };
  }>;
};

export async function createSession(
  token: string,
  input: { classGroupId: string; sessionDate?: string; startsAt?: string; notes?: string },
): Promise<AttendanceSession> {
  return apiFetch<AttendanceSession>('/attendance/sessions', { method: 'POST', token, body: input });
}

export async function getSession(token: string, id: string): Promise<AttendanceSessionDetails> {
  return apiFetch<AttendanceSessionDetails>(`/attendance/sessions/${id}`, { token });
}

export async function markByQr(
  token: string,
  input: { sessionId: string; qrToken: string },
): Promise<{
  alreadyMarked: boolean;
  student: { id: string; fullName: string; phone: string | null; isActive: boolean };
  mark: { id: string; markedAt: string; source: string } | null;
}> {
  return apiFetch(`/attendance/sessions/${input.sessionId}/mark-by-qr`, {
    method: 'POST',
    token,
    body: { qrToken: input.qrToken },
  });
}

import { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as attendanceApi from '../api/attendance';
import { useAuth } from '../auth/AuthContext';

function fmtDateTime(iso: string | null) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString();
}

export function AttendancePage() {
  const { token: maybeToken, logout } = useAuth();
  if (!maybeToken) throw new Error('AttendancePage requires auth');
  const token = maybeToken;

  const [error, setError] = useState<string | null>(null);

  // Create/upsert session
  const [classGroupId, setClassGroupId] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [startsAt, setStartsAt] = useState('');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [createdSessionId, setCreatedSessionId] = useState<string | null>(null);

  async function onCreateSession(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const res = await attendanceApi.createSession(token, {
        classGroupId: classGroupId.trim(),
        sessionDate: sessionDate || undefined,
        startsAt: startsAt || undefined,
        notes: notes || undefined,
      });
      setCreatedSessionId(res.id);
      setLoadedSessionId(res.id);
      await loadSession(res.id);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to create session');
      }
    } finally {
      setSaving(false);
    }
  }

  // Load session
  const [loadedSessionId, setLoadedSessionId] = useState('');
  const [session, setSession] = useState<attendanceApi.AttendanceSessionDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const loadSession = useCallback(
    async (id: string) => {
      setLoading(true);
      setError(null);
      try {
        const s = await attendanceApi.getSession(token, id);
        setSession(s);
      } catch (err) {
        setSession(null);
        if (err instanceof ApiError) {
          if (err.status === 401) logout();
          else setError(err.message);
        } else {
          setError('Failed to load session');
        }
      } finally {
        setLoading(false);
      }
    },
    [token, logout],
  );

  async function onLoadSession(e: FormEvent) {
    e.preventDefault();
    const id = loadedSessionId.trim();
    if (!id) return;
    await loadSession(id);
  }

  // Mark by QR
  const [markQrToken, setMarkQrToken] = useState('');
  const [marking, setMarking] = useState(false);
  const [markResult, setMarkResult] = useState<string | null>(null);

  async function onMark(e: FormEvent) {
    e.preventDefault();
    if (!session) return;
    setError(null);
    setMarkResult(null);
    setMarking(true);

    try {
      const res = await attendanceApi.markByQr(token, { sessionId: session.id, qrToken: markQrToken.trim() });
      setMarkResult(res.alreadyMarked ? 'Already marked' : 'Marked');
      setMarkQrToken('');
      await loadSession(session.id);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to mark attendance');
      }
    } finally {
      setMarking(false);
    }
  }

  return (
    <div className="page page-left">
      <h1 className="h1">Attendance</h1>

      {error ? <div className="error">{error}</div> : null}

      <section className="card">
        <h2 className="h2">Create / upsert session</h2>
        <form className="grid" onSubmit={onCreateSession}>
          <label className="field">
            <span>Class group ID</span>
            <input value={classGroupId} onChange={(e) => setClassGroupId(e.target.value)} placeholder="UUID" required />
          </label>
          <label className="field">
            <span>Session date (optional)</span>
            <input value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} type="date" />
          </label>
          <label className="field">
            <span>Starts at (optional)</span>
            <input value={startsAt} onChange={(e) => setStartsAt(e.target.value)} type="datetime-local" />
          </label>
          <label className="field">
            <span>Notes (optional)</span>
            <input value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Saving…' : 'Create / update'}
            </button>
          </div>
        </form>
        {createdSessionId ? (
          <p className="muted" style={{ marginTop: 12 }}>
            Session ID: <code>{createdSessionId}</code>
          </p>
        ) : null}
      </section>

      <section className="card">
        <h2 className="h2">Load session</h2>
        <form className="form" onSubmit={onLoadSession}>
          <label className="field">
            <span>Session ID</span>
            <input value={loadedSessionId} onChange={(e) => setLoadedSessionId(e.target.value)} placeholder="UUID" />
          </label>
          <div className="row">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Loading…' : 'Load'}
            </button>
          </div>
        </form>

        {session ? (
          <div style={{ marginTop: 12 }}>
            <div className="muted">Class group</div>
            <div>
              {session.classGroup.grade.name} / {session.classGroup.name}
            </div>
            <div className="muted" style={{ marginTop: 8 }}>
              Session date
            </div>
            <div>{fmtDateTime(session.sessionDate)}</div>

            <div className="muted" style={{ marginTop: 12 }}>
              Marks
            </div>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Student</th>
                    <th>Source</th>
                    <th>Marked by</th>
                  </tr>
                </thead>
                <tbody>
                  {session.marks.map((m) => (
                    <tr key={m.id}>
                      <td>{fmtDateTime(m.markedAt)}</td>
                      <td>
                        {m.student.fullName} <span className="muted">({m.student.phone ?? ''})</span>
                      </td>
                      <td>{m.source}</td>
                      <td className="muted">{m.markedByUserId ?? ''}</td>
                    </tr>
                  ))}
                  {session.marks.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="muted">
                        No marks yet
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </section>

      <section className="card">
        <h2 className="h2">Mark attendance by QR</h2>
        {!session ? <p className="muted">Load a session first.</p> : null}
        <form className="form" onSubmit={onMark}>
          <label className="field">
            <span>QR token</span>
            <input value={markQrToken} onChange={(e) => setMarkQrToken(e.target.value)} required disabled={!session} />
          </label>
          {markResult ? <p className="muted">{markResult}</p> : null}
          <button className="btn" type="submit" disabled={!session || marking}>
            {marking ? 'Marking…' : 'Mark'}
          </button>
        </form>
      </section>
    </div>
  );
}

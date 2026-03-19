import { useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as studentsApi from '../api/students';
import { useAuth } from '../auth/AuthContext';

export function StudentsPage() {
  const { token: maybeToken, logout } = useAuth();
  if (!maybeToken) throw new Error('StudentsPage requires auth');
  const token = maybeToken;

  const [error, setError] = useState<string | null>(null);

  // Create
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState<studentsApi.Student | null>(null);

  async function onCreate(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setCreating(true);
    setCreated(null);

    try {
      const student = await studentsApi.createStudent(token, {
        fullName: fullName.trim(),
        phone: phone.trim() || undefined,
      });
      setCreated(student);
      setFullName('');
      setPhone('');
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to create student');
      }
    } finally {
      setCreating(false);
    }
  }

  // Get
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState<studentsApi.Student | null>(null);

  async function onGet(e: FormEvent) {
    e.preventDefault();
    const id = studentId.trim();
    if (!id) return;
    setError(null);
    setLoading(true);
    setStudent(null);

    try {
      const s = await studentsApi.getStudent(token, id);
      setStudent(s);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to load student');
      }
    } finally {
      setLoading(false);
    }
  }

  // Issue QR
  const [issuing, setIssuing] = useState(false);
  const [issued, setIssued] = useState<{ studentId: string; token: string } | null>(null);

  async function onIssueQr(e: FormEvent) {
    e.preventDefault();
    const id = studentId.trim();
    if (!id) return;

    setError(null);
    setIssuing(true);
    setIssued(null);

    try {
      const res = await studentsApi.issueStudentQr(token, id);
      setIssued(res);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to issue QR');
      }
    } finally {
      setIssuing(false);
    }
  }

  return (
    <div className="page page-left">
      <h1 className="h1">Students</h1>

      {error ? <div className="error">{error}</div> : null}

      <section className="card">
        <h2 className="h2">Create student</h2>
        <form className="grid" onSubmit={onCreate}>
          <label className="field">
            <span>Full name</span>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </label>
          <label className="field">
            <span>Phone (optional)</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={creating}>
              {creating ? 'Saving…' : 'Create'}
            </button>
          </div>
        </form>

        {created ? (
          <p className="muted" style={{ marginTop: 12 }}>
            Created student ID: <code>{created.id}</code>
          </p>
        ) : null}
      </section>

      <section className="card">
        <h2 className="h2">Get student</h2>
        <form className="form" onSubmit={onGet}>
          <label className="field">
            <span>Student ID</span>
            <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="UUID" />
          </label>
          <div className="row">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Loading…' : 'Load'}
            </button>
            <button className="btn secondary" onClick={(e) => { e.preventDefault(); setStudent(null); setIssued(null); }}>
              Clear
            </button>
          </div>
        </form>

        {student ? (
          <div style={{ marginTop: 12 }}>
            <div className="muted">Name</div>
            <div>{student.fullName}</div>
            <div className="muted" style={{ marginTop: 8 }}>
              Phone
            </div>
            <div>{student.phone ?? ''}</div>
          </div>
        ) : null}
      </section>

      <section className="card">
        <h2 className="h2">Issue QR token</h2>
        <form className="form" onSubmit={onIssueQr}>
          <p className="muted">Issues a new QR and deactivates the previous active token.</p>
          <div className="row">
            <button className="btn" type="submit" disabled={issuing || !studentId.trim()}>
              {issuing ? 'Issuing…' : 'Issue new QR'}
            </button>
          </div>
        </form>

        {issued ? (
          <p className="muted" style={{ marginTop: 12 }}>
            New token: <code>{issued.token}</code>
          </p>
        ) : null}
      </section>
    </div>
  );
}

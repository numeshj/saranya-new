import { useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as usersApi from '../api/users';
import { useAuth } from '../auth/AuthContext';

export function UsersPage() {
  const { token: maybeToken, logout } = useAuth();
  if (!maybeToken) throw new Error('UsersPage requires auth');
  const token = maybeToken;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<usersApi.UserRole>('STAFF');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdId, setCreatedId] = useState<string | null>(null);

  async function onCreate(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setCreatedId(null);
    setSaving(true);

    try {
      const res = await usersApi.createUser(token, { email: email.trim(), password, role });
      setCreatedId(res.id);
      setEmail('');
      setPassword('');
      setRole('STAFF');
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to create user');
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="page page-left">
      <h1 className="h1">Users</h1>

      <section className="card">
        <h2 className="h2">Create user</h2>
        <p className="muted">Admin-only endpoint.</p>

        <form className="grid" onSubmit={onCreate}>
          <label className="field">
            <span>Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          </label>
          <label className="field">
            <span>Password</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </label>
          <label className="field">
            <span>Role</span>
            <select value={role} onChange={(e) => setRole(e.target.value as usersApi.UserRole)}>
              <option value="ADMIN">ADMIN</option>
              <option value="STAFF">STAFF</option>
              <option value="PARENT_STUDENT">PARENT_STUDENT</option>
            </select>
          </label>
          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Saving…' : 'Create'}
            </button>
          </div>
        </form>

        {error ? <div className="error">{error}</div> : null}
        {createdId ? (
          <p className="muted" style={{ marginTop: 12 }}>
            Created user ID: <code>{createdId}</code>
          </p>
        ) : null}
      </section>
    </div>
  );
}

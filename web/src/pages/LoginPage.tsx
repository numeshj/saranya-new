import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiError } from '../api/http';
import { useAuth } from '../auth/AuthContext';

export function LoginPage() {
  const { login, token } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await login(email.trim(), password);
      navigate('/expenses', { replace: true });
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('Login failed');
      }
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/expenses', { replace: true });
    }
  }, [token, navigate]);

  return (
    <div className="page">
      <div className="card">
        <h1 className="h1">Saranya</h1>
        <p className="muted">Admin/Staff login</p>

        <form onSubmit={onSubmit} className="form">
          <label className="field">
            <span>Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="username"
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
              required
            />
          </label>

          {error ? <div className="error">{error}</div> : null}

          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}

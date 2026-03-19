import { useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as qrApi from '../api/qr';
import { useAuth } from '../auth/AuthContext';

export function QrPage() {
  const { token: maybeToken, logout } = useAuth();
  if (!maybeToken) throw new Error('QrPage requires auth');
  const token = maybeToken;

  const [qrToken, setQrToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ id: string; fullName: string; phone: string | null } | null>(null);

  async function onScan(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const res = await qrApi.scanQr(token, qrToken.trim());
      setResult(res.student);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Scan failed');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page page-left">
      <h1 className="h1">QR</h1>

      <section className="card">
        <h2 className="h2">Scan QR token</h2>
        <form className="form" onSubmit={onScan}>
          <label className="field">
            <span>QR token</span>
            <input value={qrToken} onChange={(e) => setQrToken(e.target.value)} placeholder="hex token" required />
          </label>
          {error ? <div className="error">{error}</div> : null}
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Scanning…' : 'Scan'}
          </button>
        </form>

        {result ? (
          <div style={{ marginTop: 12 }}>
            <div className="muted">Student</div>
            <div>
              {result.fullName} (<code>{result.id}</code>)
            </div>
            <div className="muted" style={{ marginTop: 8 }}>
              Phone
            </div>
            <div>{result.phone ?? ''}</div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

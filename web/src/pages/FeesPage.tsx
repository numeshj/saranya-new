import { useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as feesApi from '../api/fees';
import { useAuth } from '../auth/AuthContext';

function asInt(v: string): number | undefined {
  const t = v.trim();
  if (!t) return undefined;
  const n = Number(t);
  return Number.isFinite(n) ? n : undefined;
}

export function FeesPage() {
  const { token: maybeToken, logout } = useAuth();
  if (!maybeToken) throw new Error('FeesPage requires auth');
  const token = maybeToken;

  const [error, setError] = useState<string | null>(null);

  const [classGroupId, setClassGroupId] = useState('');
  const [effectiveYear, setEffectiveYear] = useState(String(new Date().getFullYear()));
  const [effectiveMonth, setEffectiveMonth] = useState(String(new Date().getMonth() + 1));
  const [amount, setAmount] = useState('');
  const [saving, setSaving] = useState(false);

  async function onSet(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const y = asInt(effectiveYear);
      const m = asInt(effectiveMonth);
      if (!y || !m) {
        setError('Invalid effectiveYear/effectiveMonth');
        return;
      }

      await feesApi.setMonthlyFee(token, {
        classGroupId: classGroupId.trim(),
        effectiveYear: y,
        effectiveMonth: m,
        amount,
      });
      await refresh();
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to set fee');
      }
    } finally {
      setSaving(false);
    }
  }

  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<feesApi.MonthlyFee[]>([]);

  async function refresh() {
    const cg = classGroupId.trim();
    if (!cg) return;
    setError(null);
    setLoading(true);
    try {
      const res = await feesApi.listMonthlyFees(token, cg);
      setRows(res);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to load fees');
      }
    } finally {
      setLoading(false);
    }
  }

  async function onList(e: FormEvent) {
    e.preventDefault();
    await refresh();
  }

  return (
    <div className="page page-left">
      <h1 className="h1">Fees</h1>
      {error ? <div className="error">{error}</div> : null}

      <section className="card">
        <h2 className="h2">Set class group monthly fee</h2>
        <form className="grid" onSubmit={onSet}>
          <label className="field">
            <span>Class group ID</span>
            <input value={classGroupId} onChange={(e) => setClassGroupId(e.target.value)} placeholder="UUID" required />
          </label>
          <label className="field">
            <span>Amount</span>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" required />
          </label>
          <label className="field">
            <span>Effective year</span>
            <input value={effectiveYear} onChange={(e) => setEffectiveYear(e.target.value)} inputMode="numeric" required />
          </label>
          <label className="field">
            <span>Effective month</span>
            <input value={effectiveMonth} onChange={(e) => setEffectiveMonth(e.target.value)} inputMode="numeric" required />
          </label>
          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        </form>
      </section>

      <section className="card">
        <h2 className="h2">List monthly fees</h2>
        <form className="form" onSubmit={onList}>
          <p className="muted">Uses the same Class group ID as above.</p>
          <button className="btn" type="submit" disabled={loading || !classGroupId.trim()}>
            {loading ? 'Loading…' : 'Load'}
          </button>
        </form>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Effective month</th>
                <th className="right">Amount</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>
                    {r.effectiveYear}-{String(r.effectiveMonth).padStart(2, '0')}
                  </td>
                  <td className="right">{r.amount}</td>
                  <td className="muted">{new Date(r.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={3} className="muted">
                    No rows
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

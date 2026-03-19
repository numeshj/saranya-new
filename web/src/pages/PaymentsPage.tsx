import { useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as paymentsApi from '../api/payments';
import { useAuth } from '../auth/AuthContext';

function asInt(v: string): number | undefined {
  const t = v.trim();
  if (!t) return undefined;
  const n = Number(t);
  return Number.isFinite(n) ? n : undefined;
}

export function PaymentsPage() {
  const { token: maybeToken, logout } = useAuth();
  if (!maybeToken) throw new Error('PaymentsPage requires auth');
  const token = maybeToken;

  const [error, setError] = useState<string | null>(null);

  // Record by QR
  const [qrToken, setQrToken] = useState('');
  const [classGroupId, setClassGroupId] = useState('');
  const [paidYear, setPaidYear] = useState(String(new Date().getFullYear()));
  const [paidMonth, setPaidMonth] = useState(String(new Date().getMonth() + 1));
  const [isFreeCard, setIsFreeCard] = useState(false);
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<paymentsApi.PaymentMethod>('CASH');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [recordResult, setRecordResult] = useState<string | null>(null);

  async function onRecord(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setRecordResult(null);
    setSaving(true);

    try {
      const y = asInt(paidYear);
      const m = asInt(paidMonth);
      if (!y || !m) {
        setError('Invalid paidYear/paidMonth');
        return;
      }

      const res = await paymentsApi.recordPaymentByQr(token, {
        qrToken: qrToken.trim(),
        classGroupId: classGroupId.trim(),
        paidYear: y,
        paidMonth: m,
        isFreeCard,
        amount: isFreeCard ? undefined : amount,
        method,
        notes: notes || undefined,
      });

      setRecordResult(res.alreadyPaid ? 'Already paid (existing payment returned)' : 'Payment recorded');
      setAmount('');
      setNotes('');
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to record payment');
      }
    } finally {
      setSaving(false);
    }
  }

  // List payments
  const [studentId, setStudentId] = useState('');
  const [filterClassGroupId, setFilterClassGroupId] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<paymentsApi.StudentPayment[]>([]);

  async function onList(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setRows([]);

    try {
      const res = await paymentsApi.listStudentPayments(token, {
        studentId: studentId.trim(),
        classGroupId: filterClassGroupId.trim() || undefined,
        paidYear: asInt(filterYear),
        paidMonth: asInt(filterMonth),
      });
      setRows(res);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to load payments');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page page-left">
      <h1 className="h1">Payments</h1>
      {error ? <div className="error">{error}</div> : null}

      <section className="card">
        <h2 className="h2">Record payment by QR</h2>
        <form className="grid" onSubmit={onRecord}>
          <label className="field">
            <span>QR token</span>
            <input value={qrToken} onChange={(e) => setQrToken(e.target.value)} required />
          </label>
          <label className="field">
            <span>Class group ID</span>
            <input value={classGroupId} onChange={(e) => setClassGroupId(e.target.value)} required />
          </label>
          <label className="field">
            <span>Paid year</span>
            <input value={paidYear} onChange={(e) => setPaidYear(e.target.value)} inputMode="numeric" required />
          </label>
          <label className="field">
            <span>Paid month</span>
            <input value={paidMonth} onChange={(e) => setPaidMonth(e.target.value)} inputMode="numeric" required />
          </label>
          <label className="field">
            <span>Method</span>
            <select value={method} onChange={(e) => setMethod(e.target.value as paymentsApi.PaymentMethod)}>
              <option value="CASH">CASH</option>
              <option value="CARD">CARD</option>
              <option value="BANK_TRANSFER">BANK_TRANSFER</option>
            </select>
          </label>
          <label className="field" style={{ alignSelf: 'end' }}>
            <span>&nbsp;</span>
            <label className="check">
              <input type="checkbox" checked={isFreeCard} onChange={(e) => setIsFreeCard(e.target.checked)} />
              <span>Free card</span>
            </label>
          </label>
          <label className="field">
            <span>Amount {isFreeCard ? '(ignored)' : ''}</span>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} disabled={isFreeCard} placeholder="0.00" />
          </label>
          <label className="field">
            <span>Notes</span>
            <input value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>

          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Saving…' : 'Record'}
            </button>
            {recordResult ? <span className="muted">{recordResult}</span> : null}
          </div>
        </form>
      </section>

      <section className="card">
        <h2 className="h2">List payments by student</h2>
        <form className="grid" onSubmit={onList}>
          <label className="field">
            <span>Student ID</span>
            <input value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
          </label>
          <label className="field">
            <span>Class group ID (optional)</span>
            <input value={filterClassGroupId} onChange={(e) => setFilterClassGroupId(e.target.value)} />
          </label>
          <label className="field">
            <span>Year (optional)</span>
            <input value={filterYear} onChange={(e) => setFilterYear(e.target.value)} inputMode="numeric" />
          </label>
          <label className="field">
            <span>Month (optional)</span>
            <input value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)} inputMode="numeric" />
          </label>

          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Loading…' : 'Load'}
            </button>
          </div>
        </form>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Class group</th>
                <th>Method</th>
                <th>Free</th>
                <th className="right">Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.id}>
                  <td>
                    {p.paidYear}-{String(p.paidMonth).padStart(2, '0')}
                  </td>
                  <td>
                    {p.classGroup.grade.name} / {p.classGroup.name}
                  </td>
                  <td>{p.method}</td>
                  <td>{p.isFreeCard ? 'Yes' : 'No'}</td>
                  <td className="right">{p.amount}</td>
                  <td>{p.notes ?? ''}</td>
                </tr>
              ))}
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="muted">
                    No payments
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

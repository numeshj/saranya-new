import { useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as ledgerApi from '../api/ledger';
import { useAuth } from '../auth/AuthContext';

function asInt(v: string): number | undefined {
  const t = v.trim();
  if (!t) return undefined;
  const n = Number(t);
  return Number.isFinite(n) ? n : undefined;
}

export function LedgerPage() {
  const { token: maybeToken, logout } = useAuth();
  if (!maybeToken) throw new Error('LedgerPage requires auth');
  const token = maybeToken;

  const [error, setError] = useState<string | null>(null);

  // Student ledger
  const [studentId, setStudentId] = useState('');
  const [classGroupId, setClassGroupId] = useState('');
  const [fromYear, setFromYear] = useState('');
  const [fromMonth, setFromMonth] = useState('');
  const [toYear, setToYear] = useState('');
  const [toMonth, setToMonth] = useState('');
  const [loadingLedger, setLoadingLedger] = useState(false);
  const [ledger, setLedger] = useState<ledgerApi.StudentLedgerResponse | null>(null);

  async function onGetLedger(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoadingLedger(true);
    setLedger(null);

    try {
      const res = await ledgerApi.getStudentLedger(token, {
        studentId: studentId.trim(),
        classGroupId: classGroupId.trim(),
        fromYear: asInt(fromYear),
        fromMonth: asInt(fromMonth),
        toYear: asInt(toYear),
        toMonth: asInt(toMonth),
      });
      setLedger(res);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to load ledger');
      }
    } finally {
      setLoadingLedger(false);
    }
  }

  // Arrears by class group
  const [arrearsClassGroupId, setArrearsClassGroupId] = useState('');
  const [arrearsYear, setArrearsYear] = useState(String(new Date().getFullYear()));
  const [arrearsMonth, setArrearsMonth] = useState(String(new Date().getMonth() + 1));
  const [loadingArrears, setLoadingArrears] = useState(false);
  const [arrears, setArrears] = useState<ledgerApi.ClassGroupArrearsResponse | null>(null);

  async function onGetArrears(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoadingArrears(true);
    setArrears(null);

    try {
      const y = asInt(arrearsYear);
      const m = asInt(arrearsMonth);
      if (!y || !m) {
        setError('Invalid year/month');
        return;
      }

      const res = await ledgerApi.getClassGroupArrears(token, {
        classGroupId: arrearsClassGroupId.trim(),
        year: y,
        month: m,
      });
      setArrears(res);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) logout();
        else setError(err.message);
      } else {
        setError('Failed to load arrears');
      }
    } finally {
      setLoadingArrears(false);
    }
  }

  return (
    <div className="page page-left">
      <h1 className="h1">Ledger</h1>
      {error ? <div className="error">{error}</div> : null}

      <section className="card">
        <h2 className="h2">Student ledger</h2>
        <form className="grid" onSubmit={onGetLedger}>
          <label className="field">
            <span>Student ID</span>
            <input value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
          </label>
          <label className="field">
            <span>Class group ID</span>
            <input value={classGroupId} onChange={(e) => setClassGroupId(e.target.value)} required />
          </label>
          <label className="field">
            <span>From year (optional)</span>
            <input value={fromYear} onChange={(e) => setFromYear(e.target.value)} inputMode="numeric" />
          </label>
          <label className="field">
            <span>From month (optional)</span>
            <input value={fromMonth} onChange={(e) => setFromMonth(e.target.value)} inputMode="numeric" />
          </label>
          <label className="field">
            <span>To year (optional)</span>
            <input value={toYear} onChange={(e) => setToYear(e.target.value)} inputMode="numeric" />
          </label>
          <label className="field">
            <span>To month (optional)</span>
            <input value={toMonth} onChange={(e) => setToMonth(e.target.value)} inputMode="numeric" />
          </label>
          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={loadingLedger}>
              {loadingLedger ? 'Loading…' : 'Load ledger'}
            </button>
          </div>
        </form>

        {ledger ? (
          <div style={{ marginTop: 12 }}>
            <p className="muted">
              {ledger.student.fullName} — {ledger.classGroup.grade.name} / {ledger.classGroup.name}
            </p>

            <div className="summary">
              <div>
                <div className="muted">Total due</div>
                <div className="big">{ledger.totals.totalDue}</div>
              </div>
              <div>
                <div className="muted">Total paid</div>
                <div className="big">{ledger.totals.totalPaid}</div>
              </div>
              <div>
                <div className="muted">Arrears</div>
                <div className="big">{ledger.totals.arrears}</div>
              </div>
            </div>

            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Status</th>
                    <th className="right">Due</th>
                    <th className="right">Paid</th>
                    <th className="right">Arrears</th>
                    <th>Method</th>
                  </tr>
                </thead>
                <tbody>
                  {ledger.rows.map((r) => (
                    <tr key={`${r.year}-${r.month}`}>
                      <td>
                        {r.year}-{String(r.month).padStart(2, '0')}
                      </td>
                      <td>{r.status}</td>
                      <td className="right">{r.amountDue}</td>
                      <td className="right">{r.amountPaid}</td>
                      <td className="right">{r.arrears}</td>
                      <td>{r.payment?.method ?? ''}</td>
                    </tr>
                  ))}
                  {ledger.rows.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="muted">
                        No rows
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
        <h2 className="h2">Class group arrears (month)</h2>
        <form className="grid" onSubmit={onGetArrears}>
          <label className="field">
            <span>Class group ID</span>
            <input value={arrearsClassGroupId} onChange={(e) => setArrearsClassGroupId(e.target.value)} required />
          </label>
          <label className="field">
            <span>Year</span>
            <input value={arrearsYear} onChange={(e) => setArrearsYear(e.target.value)} inputMode="numeric" required />
          </label>
          <label className="field">
            <span>Month</span>
            <input value={arrearsMonth} onChange={(e) => setArrearsMonth(e.target.value)} inputMode="numeric" required />
          </label>
          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={loadingArrears}>
              {loadingArrears ? 'Loading…' : 'Load arrears'}
            </button>
          </div>
        </form>

        {arrears ? (
          <div style={{ marginTop: 12 }}>
            <p className="muted">
              {arrears.classGroup.grade.name} / {arrears.classGroup.name} — fee {arrears.fee} (applied from {arrears.feeAppliedFrom.year}-
              {String(arrears.feeAppliedFrom.month).padStart(2, '0')})
            </p>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th className="right">Due</th>
                    <th className="right">Paid</th>
                    <th className="right">Arrears</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {arrears.rows.map((r) => (
                    <tr key={r.student.id}>
                      <td>
                        {r.student.fullName} <span className="muted">({r.student.phone ?? ''})</span>
                      </td>
                      <td className="right">{r.amountDue}</td>
                      <td className="right">{r.amountPaid}</td>
                      <td className="right">{r.arrears}</td>
                      <td>{r.status}</td>
                    </tr>
                  ))}
                  {arrears.rows.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="muted">
                        No students in arrears
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

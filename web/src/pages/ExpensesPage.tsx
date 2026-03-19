import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { ApiError } from '../api/http';
import * as expensesApi from '../api/expenses';
import { useAuth } from '../auth/AuthContext';

function fmtDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString();
}

export function ExpensesPage() {
  const { token: maybeToken, user, logout } = useAuth();
  if (!maybeToken) throw new Error('ExpensesPage requires auth');
  const accessToken = maybeToken;

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const [categories, setCategories] = useState<expensesApi.ExpenseCategory[]>([]);
  const [expenses, setExpenses] = useState<expensesApi.Expense[]>([]);
  const [summary, setSummary] = useState<expensesApi.ExpensesSummary | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeCategories = useMemo(
    () => categories.filter((c) => c.isActive),
    [categories],
  );

  async function refresh() {
    setError(null);
    setLoading(true);

    try {
      const [cats, sum, list] = await Promise.all([
        expensesApi.listCategories(accessToken),
        expensesApi.getSummary(accessToken, { from, to, categoryId }),
        expensesApi.listExpenses(accessToken, { from, to, categoryId, limit: 100 }),
      ]);
      setCategories(cats);
      setSummary(sum);
      setExpenses(list);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) {
          logout();
          return;
        }
        setError(err.message);
      } else {
        setError('Failed to load expenses');
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Create category
  const [newCategoryName, setNewCategoryName] = useState('');
  const [creatingCategory, setCreatingCategory] = useState(false);

  async function onCreateCategory(e: FormEvent) {
    e.preventDefault();
    const name = newCategoryName.trim();
    if (!name) return;

    setCreatingCategory(true);
    setError(null);

    try {
      await expensesApi.createCategory(accessToken, name);
      setNewCategoryName('');
      await refresh();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Failed to create category');
    } finally {
      setCreatingCategory(false);
    }
  }

  // Create expense
  const [expCategoryId, setExpCategoryId] = useState('');
  const [expAmount, setExpAmount] = useState('');
  const [expMethod, setExpMethod] = useState<expensesApi.PaymentMethod>('CASH');
  const [expDate, setExpDate] = useState('');
  const [expNotes, setExpNotes] = useState('');
  const [creatingExpense, setCreatingExpense] = useState(false);

  async function onCreateExpense(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!expCategoryId) {
      setError('Select a category');
      return;
    }

    setCreatingExpense(true);
    try {
      await expensesApi.createExpense(accessToken, {
        categoryId: expCategoryId,
        amount: expAmount,
        method: expMethod,
        expenseDate: expDate || undefined,
        notes: expNotes || undefined,
      });

      setExpAmount('');
      setExpNotes('');
      await refresh();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Failed to create expense');
    } finally {
      setCreatingExpense(false);
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <div className="brand">Saranya</div>
          <div className="muted">{user ? `${user.email} (${user.role})` : ''}</div>
        </div>
        <div className="topbar-actions">
          <button className="btn secondary" onClick={() => void refresh()} disabled={loading}>
            Refresh
          </button>
          <button className="btn secondary" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <main className="page page-left">
        <h1 className="h1">Expenses</h1>

        <section className="card">
          <h2 className="h2">Filters</h2>
          <div className="grid">
            <label className="field">
              <span>From</span>
              <input value={from} onChange={(e) => setFrom(e.target.value)} type="date" />
            </label>
            <label className="field">
              <span>To</span>
              <input value={to} onChange={(e) => setTo(e.target.value)} type="date" />
            </label>
            <label className="field">
              <span>Category</span>
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                <option value="">All</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}{c.isActive ? '' : ' (inactive)'}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="row">
            <button className="btn" onClick={() => void refresh()} disabled={loading}>
              {loading ? 'Loading…' : 'Apply'}
            </button>
          </div>

          {error ? <div className="error">{error}</div> : null}
        </section>

        <section className="card">
          <h2 className="h2">Summary</h2>
          {summary ? (
            <>
              <div className="summary">
                <div>
                  <div className="muted">Total amount</div>
                  <div className="big">{summary.totals.amount}</div>
                </div>
                <div>
                  <div className="muted">Count</div>
                  <div className="big">{summary.totals.count}</div>
                </div>
              </div>

              <div className="split">
                <div>
                  <div className="muted">By category</div>
                  <ul className="list">
                    {summary.byCategory.map((r) => (
                      <li key={r.categoryId}>
                        <span>{r.categoryName ?? r.categoryId}</span>
                        <span>{r.amount} ({r.count})</span>
                      </li>
                    ))}
                    {summary.byCategory.length === 0 ? <li className="muted">No data</li> : null}
                  </ul>
                </div>
                <div>
                  <div className="muted">By method</div>
                  <ul className="list">
                    {summary.byMethod.map((r) => (
                      <li key={r.method}>
                        <span>{r.method}</span>
                        <span>{r.amount} ({r.count})</span>
                      </li>
                    ))}
                    {summary.byMethod.length === 0 ? <li className="muted">No data</li> : null}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <p className="muted">No summary</p>
          )}
        </section>

        <section className="card">
          <h2 className="h2">Add category</h2>
          <form className="form" onSubmit={onCreateCategory}>
            <label className="field">
              <span>Name</span>
              <input value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} />
            </label>
            <button className="btn" type="submit" disabled={creatingCategory}>
              {creatingCategory ? 'Saving…' : 'Create'}
            </button>
          </form>
        </section>

        <section className="card">
          <h2 className="h2">Add expense</h2>
          <form className="grid" onSubmit={onCreateExpense}>
            <label className="field">
              <span>Category</span>
              <select value={expCategoryId} onChange={(e) => setExpCategoryId(e.target.value)} required>
                <option value="" disabled>
                  Select…
                </option>
                {activeCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Amount</span>
              <input
                value={expAmount}
                onChange={(e) => setExpAmount(e.target.value)}
                placeholder="0.00"
                inputMode="decimal"
                required
              />
            </label>
            <label className="field">
              <span>Method</span>
              <select value={expMethod} onChange={(e) => setExpMethod(e.target.value as expensesApi.PaymentMethod)}>
                <option value="CASH">CASH</option>
                <option value="CARD">CARD</option>
                <option value="BANK_TRANSFER">BANK_TRANSFER</option>
              </select>
            </label>
            <label className="field">
              <span>Date</span>
              <input value={expDate} onChange={(e) => setExpDate(e.target.value)} type="date" />
            </label>
            <label className="field" style={{ gridColumn: '1 / -1' }}>
              <span>Notes</span>
              <input value={expNotes} onChange={(e) => setExpNotes(e.target.value)} />
            </label>
            <div className="row" style={{ gridColumn: '1 / -1' }}>
              <button className="btn" type="submit" disabled={creatingExpense}>
                {creatingExpense ? 'Saving…' : 'Create expense'}
              </button>
            </div>
          </form>
        </section>

        <section className="card">
          <h2 className="h2">Recent expenses</h2>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Method</th>
                  <th className="right">Amount</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((e) => (
                  <tr key={e.id}>
                    <td>{fmtDate(e.expenseDate)}</td>
                    <td>{e.category.name}</td>
                    <td>{e.method}</td>
                    <td className="right">{e.amount}</td>
                    <td>{e.notes ?? ''}</td>
                  </tr>
                ))}
                {expenses.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="muted">
                      No expenses
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

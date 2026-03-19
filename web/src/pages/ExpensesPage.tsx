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
  const { token: maybeToken, logout } = useAuth();
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
    <div className="page page-left">
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
          <button className="btn secondary" onClick={() => void refresh()} disabled={loading}>
            Refresh
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

      <ManageExpense accessToken={accessToken} onChanged={() => void refresh()} onUnauthorized={logout} categories={activeCategories} />

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
                <th>ID</th>
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
                  <td className="muted"><code>{e.id.slice(0, 8)}…</code></td>
                </tr>
              ))}
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan={6} className="muted">
                    No expenses
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

function ManageExpense(props: {
  accessToken: string;
  categories: expensesApi.ExpenseCategory[];
  onChanged: () => void;
  onUnauthorized: () => void;
}) {
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState<expensesApi.Expense | null>(null);

  const [categoryId, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<expensesApi.PaymentMethod>('CASH');
  const [expenseDate, setExpenseDate] = useState('');
  const [notes, setNotes] = useState('');

  async function onLoad(e: FormEvent) {
    e.preventDefault();
    const expenseId = id.trim();
    if (!expenseId) return;

    setError(null);
    setLoading(true);
    setLoaded(null);

    try {
      const res = await expensesApi.getExpense(props.accessToken, expenseId);
      setLoaded(res);
      setCategoryId(res.category.id);
      setAmount(res.amount);
      setMethod(res.method);
      setExpenseDate(res.expenseDate.slice(0, 10));
      setNotes(res.notes ?? '');
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) props.onUnauthorized();
        else setError(err.message);
      } else {
        setError('Failed to load expense');
      }
    } finally {
      setLoading(false);
    }
  }

  async function onSave(e: FormEvent) {
    e.preventDefault();
    if (!loaded) return;
    setError(null);
    setSaving(true);

    try {
      await expensesApi.updateExpense(props.accessToken, loaded.id, {
        categoryId: categoryId || undefined,
        amount: amount || undefined,
        method,
        expenseDate: expenseDate || undefined,
        notes,
      });
      const refreshed = await expensesApi.getExpense(props.accessToken, loaded.id);
      setLoaded(refreshed);
      setCategoryId(refreshed.category.id);
      setAmount(refreshed.amount);
      setMethod(refreshed.method);
      setExpenseDate(refreshed.expenseDate.slice(0, 10));
      setNotes(refreshed.notes ?? '');
      props.onChanged();
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) props.onUnauthorized();
        else setError(err.message);
      } else {
        setError('Failed to update expense');
      }
    } finally {
      setSaving(false);
    }
  }

  async function onDelete() {
    if (!loaded) return;
    setError(null);
    setDeleting(true);

    try {
      await expensesApi.deleteExpense(props.accessToken, loaded.id);
      setLoaded(null);
      setId('');
      props.onChanged();
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) props.onUnauthorized();
        else setError(err.message);
      } else {
        setError('Failed to delete expense');
      }
    } finally {
      setDeleting(false);
    }
  }

  return (
    <section className="card">
      <h2 className="h2">Manage expense (GET / PATCH / DELETE)</h2>
      <form className="form" onSubmit={onLoad}>
        <label className="field">
          <span>Expense ID</span>
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="UUID" required />
        </label>
        <div className="row">
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Loading…' : 'Load'}
          </button>
        </div>
      </form>

      {error ? <div className="error">{error}</div> : null}

      {loaded ? (
        <form className="grid" onSubmit={onSave}>
          <label className="field">
            <span>Category</span>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              {props.categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Amount</span>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <label className="field">
            <span>Method</span>
            <select value={method} onChange={(e) => setMethod(e.target.value as expensesApi.PaymentMethod)}>
              <option value="CASH">CASH</option>
              <option value="CARD">CARD</option>
              <option value="BANK_TRANSFER">BANK_TRANSFER</option>
            </select>
          </label>
          <label className="field">
            <span>Date</span>
            <input value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} type="date" />
          </label>
          <label className="field" style={{ gridColumn: '1 / -1' }}>
            <span>Notes</span>
            <input value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          <div className="row" style={{ gridColumn: '1 / -1' }}>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Saving…' : 'Update'}
            </button>
            <button className="btn secondary" type="button" onClick={onDelete} disabled={deleting}>
              {deleting ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </form>
      ) : null}
    </section>
  );
}

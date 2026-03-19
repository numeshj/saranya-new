import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="page page-left">
      <div className="card">
        <h1 className="h1">Dashboard</h1>
        <p className="muted">Welcome{user ? `, ${user.email}` : ''}.</p>

        <div className="grid" style={{ marginTop: 16 }}>
          <div className="card" style={{ maxWidth: 'unset' }}>
            <h2 className="h2">Core</h2>
            <ul className="list">
              <li>
                <Link to="/students">Students</Link>
              </li>
              <li>
                <Link to="/qr">QR scan</Link>
              </li>
              <li>
                <Link to="/attendance">Attendance</Link>
              </li>
              <li>
                <Link to="/payments">Payments</Link>
              </li>
            </ul>
          </div>
          <div className="card" style={{ maxWidth: 'unset' }}>
            <h2 className="h2">Finance</h2>
            <ul className="list">
              <li>
                <Link to="/fees">Fees</Link>
              </li>
              <li>
                <Link to="/ledger">Ledger / arrears</Link>
              </li>
              <li>
                <Link to="/expenses">Expenses</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

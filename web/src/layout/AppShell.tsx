import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

function navClassName(isActive: boolean) {
  return ['nav-link', isActive ? 'active' : ''].filter(Boolean).join(' ');
}

export function AppShell() {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <div className="brand">Saranya</div>
          <div className="muted">{user ? `${user.email} (${user.role})` : ''}</div>
        </div>
        <div className="topbar-actions">
          <button className="btn secondary" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <div className="shell">
        <aside className="sidebar card">
          <nav className="nav">
            <NavLink to="/dashboard" className={({ isActive }) => navClassName(isActive)}>
              Dashboard
            </NavLink>
            <NavLink to="/students" className={({ isActive }) => navClassName(isActive)}>
              Students
            </NavLink>
            <NavLink to="/qr" className={({ isActive }) => navClassName(isActive)}>
              QR
            </NavLink>
            <NavLink to="/attendance" className={({ isActive }) => navClassName(isActive)}>
              Attendance
            </NavLink>
            <NavLink to="/payments" className={({ isActive }) => navClassName(isActive)}>
              Payments
            </NavLink>
            <NavLink to="/fees" className={({ isActive }) => navClassName(isActive)}>
              Fees
            </NavLink>
            <NavLink to="/ledger" className={({ isActive }) => navClassName(isActive)}>
              Ledger
            </NavLink>
            <NavLink to="/expenses" className={({ isActive }) => navClassName(isActive)}>
              Expenses
            </NavLink>
            {user?.role === 'ADMIN' ? (
              <NavLink to="/users" className={({ isActive }) => navClassName(isActive)}>
                Users
              </NavLink>
            ) : null}
          </nav>
        </aside>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

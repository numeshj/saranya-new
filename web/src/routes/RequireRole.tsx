import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export function RequireRole(props: { roles: string[] }) {
  const { user, initializing } = useAuth();

  if (initializing) {
    return (
      <div className="page">
        <p>Loading…</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!props.roles.includes(user.role)) {
    return (
      <div className="page">
        <div className="card">
          <h1 className="h1">Access denied</h1>
          <p className="muted">You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return <Outlet />;
}

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export function RequireAuth() {
  const { token, initializing } = useAuth();
  const location = useLocation();

  if (initializing) {
    return <div className="page"><p>Loading…</p></div>;
  }

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { RequireAuth } from './routes/RequireAuth';
import { RequireRole } from './routes/RequireRole';
import { AppShell } from './layout/AppShell';
import { DashboardPage } from './pages/DashboardPage';
import { ExpensesPage } from './pages/ExpensesPage';
import { StudentsPage } from './pages/StudentsPage';
import { QrPage } from './pages/QrPage';
import { AttendancePage } from './pages/AttendancePage';
import { PaymentsPage } from './pages/PaymentsPage';
import { FeesPage } from './pages/FeesPage';
import { LedgerPage } from './pages/LedgerPage';
import { UsersPage } from './pages/UsersPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<RequireAuth />}>
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/qr" element={<QrPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/fees" element={<FeesPage />} />
          <Route path="/ledger" element={<LedgerPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />

          <Route element={<RequireRole roles={['ADMIN']} />}>
            <Route path="/users" element={<UsersPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

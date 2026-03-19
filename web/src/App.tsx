import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { RequireAuth } from './routes/RequireAuth';
import { ExpensesPage } from './pages/ExpensesPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/expenses" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<RequireAuth />}>
        <Route path="/expenses" element={<ExpensesPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

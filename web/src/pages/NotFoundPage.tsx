import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="page">
      <div className="card">
        <h1 className="h1">Not found</h1>
        <Link to="/expenses">Go to Expenses</Link>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Progress from './pages/Progress';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <header className="navbar">
        <span className="nav-logo">TASK MASTER</span>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'nav-link--active' : ''}`}>
            Dashboard
          </Link>
          <Link to="/progress" className={`nav-link ${location.pathname === '/progress' ? 'nav-link--active' : ''}`}>
            Stats
          </Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
          <Route path="/progress" element={<Progress tasks={tasks} />} />
        </Routes>
      </main>
    </div>
  );
}
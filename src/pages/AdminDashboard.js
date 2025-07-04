import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function AdminDashboard() {
  const navigate = useNavigate(); // ✅ properly initialize navigate

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Helpdesk</h2>
        <ul>
          <li onClick={() => navigate('/admin-dashboard')}>📊 Dashboard</li>
          <li onClick={() => navigate('/admin-dashboard/database')}>💾 Database</li>
          <li onClick={() => navigate('/admin-dashboard/settings')}>⚙️ Setting</li>
          <li onClick={() => navigate('/admin-dashboard/user-log-history')}>📜 User Log History</li>
        </ul>
      </aside>

      <main className="main-content">
        <header>
          <h2>Admin - Dashboard</h2>
          <div className="header-icons">🔔 👤 🔒</div>
        </header>

        <section className="cards">
          <div className="card blue">Total Tickets <span>12</span></div>
          <div className="card green">Total Solved <span>8</span></div>
          <div className="card red">Total Awaiting Approval <span>2</span></div>
          <div className="card yellow">Total In Progress <span>2</span></div>
        </section>

        <section className="extras">
          <div className="box">📊</div>
          <div className="box">🎧 3 Technical Supports</div>
          <div className="box">👨‍💻 4 Operation Team</div>
        </section>

        <div className="feedback">
          Customer Feedback ★★★★☆
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

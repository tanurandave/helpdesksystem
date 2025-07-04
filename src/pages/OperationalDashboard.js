import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function OperationDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Helpdesk</h2>
        <ul>
          <li onClick={() => navigate('/operation-dashboard')}>📊 Dashboard</li>
          <li onClick={() => navigate('/operation-dashboard/ticket-approval')}>✅ Ticket Approval</li>
          <li onClick={() => navigate('/operation-dashboard/my-ticket')}>📁 My Ticket</li>
          <li onClick={() => navigate('/operation-dashboard/performance')}>📈 Performance</li>
        </ul>
      </aside>

      <main className="main-content">
        <header><h2>Dashboard</h2></header>
        <section className="cards">
          <div className="card blue">Total Tickets <span>12</span></div>
          <div className="card green">Total Solved <span>8</span></div>
          <div className="card red">Total Awaiting Approval <span>2</span></div>
          <div className="card yellow">Total In Progress <span>2</span></div>
        </section>
        <section className="cards secondary">
          <div className="card cyan">📊 Analytics</div>
          <div className="card cyan">👨‍💻 Technical Support</div>
          <div className="card cyan">👷 Operator Team</div>
          <div className="card cyan">Customer Feedback ⭐⭐⭐⭐☆</div>
        </section>
      </main>
    </div>
  );
}

export default OperationDashboard;

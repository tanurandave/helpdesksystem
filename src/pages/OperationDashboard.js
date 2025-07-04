import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OperationDashboard.css';

function OperationDashboard() {
  const navigate = useNavigate();

  const [metrics] = useState({
    totalTickets: 12,
    totalSolved: 8,
    awaitingApproval: 2,
    inProgress: 2,
  });

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
        <header>
          <h2>Operation Team - Dashboard</h2>
          <div className="header-icons">
            🔔 👤
          </div>
        </header>

        <section className="cards">
          <div className="card blue">Total Tickets <span>{metrics.totalTickets}</span></div>
          <div className="card green">Total Solved <span>{metrics.totalSolved}</span></div>
          <div className="card red">Total Awaiting Approval <span>{metrics.awaitingApproval}</span></div>
          <div className="card yellow">Total In Progress <span>{metrics.inProgress}</span></div>
        </section>

        <section className="performance-section">
          <div className="chart-box">📊</div>
          <div className="support-box">
            <div className="support-icon">🎧</div>
            <p>Technical Support</p>
          </div>
          <div className="support-box">
            <div className="support-icon">🛠️</div>
            <p>Operator Team</p>
          </div>
          <div className="feedback-box">
            <h4>Customer Feedback</h4>
            <p>★★★★☆</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OperationDashboard;

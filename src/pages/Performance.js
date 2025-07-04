import React from 'react';
import '../styles/Dashboard.css';

function Performance() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Helpdesk</h2>
        
        <ul>
          <li>📊 Dashboard</li>
          <li>✅ Ticket Approval</li>
          <li>📁 My Ticket</li>
          <li>📈 Performance</li>
        </ul>
      </aside>

      <main className="main-content">
        <header><h2>Performance</h2></header>
        <div className="performance-box">
          <p>📊 Team Performance Metrics Coming Soon...</p>
        </div>
      </main>
    </div>
  );
}

export default Performance;

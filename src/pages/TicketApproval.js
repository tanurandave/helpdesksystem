import React, { useState } from 'react';
import '../styles/Dashboard.css';

const tickets = [
  { ticketNo: 1234, subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '13/08/21' },
  { ticketNo: 1124, subject: 'New ticket issue', category: 'Access Issue', priority: 'Medium', date: '14/08/21' },
  { ticketNo: 1224, subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21' },
  { ticketNo: 1244, subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21' },
  { ticketNo: 1114, subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '03/08/21' },
];

function TicketApproval() {
  const [search, setSearch] = useState('');

  const filtered = tickets.filter(t => t.subject.toLowerCase().includes(search.toLowerCase()));

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
        <header><h2>Ticket Approval</h2></header>
        <input
          type="text"
          placeholder="Find ticket"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Action</th>
              <th>Assign To</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.ticketNo}>
                <td>{t.ticketNo}</td>
                <td>{t.subject}</td>
                <td>{t.category}</td>
                <td>{t.priority}</td>
                <td>{t.date}</td>
                <td>✔️ ❌</td>
                <td><input type="checkbox" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default TicketApproval;

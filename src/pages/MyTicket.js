import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/myticket.css';

const dummyTickets = [
  {
    ticketNo: 1234, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech support',
    date: '13/08/21', rate: 0, name: 'John', dept: 'IT', title: 'Login Issue', description: 'Cannot login to portal',
    category: 'Login', type: 'Bug', priority: 'High', attachment: 'None'
  },
  {
    ticketNo: 1124, subject: 'New ticket issue', status: 'On hold', supportBy: 'Operation Team',
    date: '14/08/21', rate: 0, name: 'Alice', dept: 'Support', title: 'Issue', description: 'Ticket stuck',
    category: 'System', type: 'Error', priority: 'Medium', attachment: 'None'
  },
  {
    ticketNo: 1224, subject: 'New request', status: 'Closed', supportBy: 'Tech support',
    date: '13/08/21', rate: 4, name: 'Bob', dept: 'HR', title: 'Access', description: 'Request for access',
    category: 'Access', type: 'Request', priority: 'Low', attachment: 'PDF'
  },
];

function MyTicket() {
  const [search, setSearch] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const navigate = useNavigate();

  const filteredTickets = dummyTickets.filter(t =>
    t.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Helpdesk</h2>
         <ul>
          <li onClick={() => navigate('/user-dashboard')}>📊 Dashboard</li>
          <li onClick={() => navigate('/user-dashboard/new-ticket')}>➕ New Tickets</li>
          <li onClick={() => navigate('/user-dashboard/my-ticket')}>📁 My Tickets</li>
        </ul>
      </aside>

      <main className="main-content">
        <header><h2>List of Ticket</h2></header>

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
              <th>Status</th>
              <th>Support By</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.ticketNo}>
                <td className="ticket-link" onClick={() => setSelectedTicket(ticket)}>{ticket.ticketNo}</td>
                <td>{ticket.subject}</td>
                <td><span className={`status ${ticket.status.replace(' ', '').toLowerCase()}`}>{ticket.status}</span></td>
                <td>{ticket.supportBy}</td>
                <td>{ticket.date}</td>
                <td>{"★".repeat(ticket.rate) + "☆".repeat(5 - ticket.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedTicket && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3>Ticket Details</h3>
              <p><strong>Ticket No:</strong> {selectedTicket.ticketNo}</p>
              <p><strong>Date:</strong> {selectedTicket.date}</p>
              <p><strong>Name:</strong> {selectedTicket.name}</p>
              <p><strong>Dept:</strong> {selectedTicket.dept}</p>
              <p><strong>Title:</strong> {selectedTicket.title}</p>
              <p><strong>Description:</strong> {selectedTicket.description}</p>
              <p><strong>Category:</strong> {selectedTicket.category}</p>
              <p><strong>Type:</strong> {selectedTicket.type}</p>
              <p><strong>Priority:</strong> {selectedTicket.priority}</p>
              <p><strong>Status:</strong> {selectedTicket.status}</p>
              <p><strong>Attachment:</strong> {selectedTicket.attachment}</p>
              <button className="close-btn" onClick={() => setSelectedTicket(null)}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default MyTicket;

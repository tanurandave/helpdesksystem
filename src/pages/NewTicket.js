import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/newticket.css';

function NewTicket() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ticketNo: '',
    name: '',
    date: '',
    department: '',
    subject: '',
    category: '',
    type: '',
    priority: '',
    description: '',
    isVerified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.isVerified) {
      alert('Ticket submitted successfully!');
      console.log(formData);
    } else {
      alert('Please verify you are not a robot!');
    }
  };

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
        <header><h2>Create New Ticket</h2></header>
        <form className="ticket-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="ticketNo" placeholder="Ticket No" onChange={handleChange} />
            <input type="date" name="date" placeholder="Date" onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="department" placeholder="Department" onChange={handleChange} />
          </div>
          <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />

          <div className="form-row">
            <input type="text" name="category" placeholder="Category" onChange={handleChange} />
            <textarea name="description" placeholder="Description" rows="3" onChange={handleChange}></textarea>
          </div>

          <div className="form-row">
            <input type="text" name="type" placeholder="Type" onChange={handleChange} />
            <input type="text" name="priority" placeholder="Priority" onChange={handleChange} />
          </div>

          <div className="form-row checkbox-row">
            <input type="checkbox" name="isVerified" onChange={handleChange} /> I'm not a robot
          </div>

          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default NewTicket;

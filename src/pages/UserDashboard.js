import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function UserDashboard() {
  const navigate = useNavigate();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Settings form data
  const [settingsData, setSettingsData] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    email: '',
    realName: '',
    accessLevel: '',
    projectAccessLevel: ''
  });

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettingsData({ ...settingsData, [name]: value });
  };

  const handleUpdateUser = () => {
    alert('User updated successfully!');
    setShowSettings(false);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Helpdesk</h2>
        <ul>
          <li onClick={() => navigate('/user-dashboard')}>📊 Dashboard</li>
          <li onClick={() => navigate('/user-dashboard/new-ticket')}>➕ New Ticket</li>
          <li onClick={() => navigate('/user-dashboard/my-ticket')}>📁 My Ticket</li>
        </ul>
      </aside>

      <main className="main-content">
        <header>
          <h2>User - Dashboard</h2>
          <div className="header-icons">
            🔔 
            <span onClick={() => setShowProfilePopup(true)} style={{ cursor: 'pointer' }}>👤</span>
            <span onClick={() => setShowSettings(true)} style={{ cursor: 'pointer' }}>⚙️</span>
          </div>
        </header>

        {!showSettings ? (
          <section className="cards">
            <div className="card blue">Total Tickets <span>12</span></div>
            <div className="card green">Total Solved <span>8</span></div>
            <div className="card red">Total Awaiting Approval <span>2</span></div>
            <div className="card yellow">Total In Progress <span>2</span></div>
          </section>
        ) : (
          <section className="user-settings">
            <h2>User Profile</h2>
            <div className="settings-form">
              <input type="text" placeholder="Username" name="username" onChange={handleSettingsChange} />
              <input type="password" placeholder="Current Password" name="currentPassword" onChange={handleSettingsChange} />
              <input type="password" placeholder="New Password" name="newPassword" onChange={handleSettingsChange} />
              <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleSettingsChange} />
              <input type="email" placeholder="Email" name="email" onChange={handleSettingsChange} />
              <input type="text" placeholder="Real Name" name="realName" onChange={handleSettingsChange} />
              <input type="text" placeholder="Access Level" name="accessLevel" onChange={handleSettingsChange} />
              <input type="text" placeholder="Project Access Level" name="projectAccessLevel" onChange={handleSettingsChange} />
              <button onClick={handleUpdateUser}>Update User</button>
            </div>
          </section>
        )}

        {showProfilePopup && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3>User Profile</h3>
              <div className="profile-card">
                <div className="profile-icon">👤</div>
                <p><strong>Username:</strong> JohnDoe</p>
                <p><strong>Contact:</strong> 9876543210</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Department:</strong> IT</p>
              </div>
              <button className="close-btn" onClick={() => setShowProfilePopup(false)}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default UserDashboard;

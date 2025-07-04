// components/SettingsPage.js
import React from 'react';
import '../styles/SettingsPage.css';

function SettingsPage() {
  return (
    <div className="page-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>General</h3>
        <p>🌐 Language: [EN/BI]</p>
        <p>💾 Data Backup: ✅</p>
      </div>

      <div className="settings-section">
        <h3>Connect To</h3>
        <p>🔌 GoDash: ✅</p>
        <p>🔌 SuperController: ✅</p>
      </div>

      <div className="settings-section">
        <h3>Email</h3>
        <p>📧 Enable SMTP: ✅</p>
      </div>

      <div className="settings-section">
        <h3>Authorization</h3>
        <p>🔐 Edit Authorization: ✅</p>
        <p>🛡️ Authority Level: ❌</p>
      </div>

      <div className="settings-section">
        <h3>Notification</h3>
        <p>🔔 Enable Notification: ✅</p>
      </div>
    </div>
  );
}

export default SettingsPage;

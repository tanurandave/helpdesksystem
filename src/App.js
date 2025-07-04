import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import SignIn from './pages/SignIn';

import ForgotPassword from './pages/ForgotPassword';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import OperationalDashboard from './pages/OperationalDashboard';

import NewTicket from './pages/NewTicket';
import MyTicket from './pages/MyTicket';

import OperationDashboard from './pages/OperationDashboard';
import TicketApproval from './pages/TicketApproval';
import Performance from './pages/Performance';
import OperationMyTicket from './pages/OperationMyTicket';


import DatabasePage from './pages/DatabasePage';
import SettingsPage from './pages/SettingsPage';
import UserLogHistoryPage from './pages/UserLogHistoryPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/operational-dashboard" element={<OperationalDashboard />} />
        
        
        <Route path="/user-dashboard/new-ticket" element={<NewTicket />} />
        <Route path="/user-dashboard/my-ticket" element={<MyTicket />} />

        
        <Route path="/operation-dashboard" element={<OperationDashboard />} />
        <Route path="/operation-dashboard/ticket-approval" element={<TicketApproval />} />
        <Route path="/operation-dashboard/my-ticket" element={<OperationMyTicket />} />
        <Route path="/operation-dashboard/performance" element={<Performance />} />

        <Route path="admin-dashboard/database" element={<DatabasePage />} />
        <Route path="admin-dashboard/settings" element={<SettingsPage />} />
        <Route path="admin-dashboard/user-log-history" element={<UserLogHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

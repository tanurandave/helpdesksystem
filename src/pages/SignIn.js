import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Hardcoded login checks (replace with backend logic later)
    if (username === 'admin' && password === 'admin123') {
      alert('Login Successful');
      navigate('/admin-dashboard');
    } else if (username === 'user' && password === 'user123') {
      alert('Login Successful');
      navigate('/user-dashboard');
    } else if (username === 'operator' && password === 'op123') {
      alert('Login Successful');
      navigate('/operational-dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Helpdesk System</h2>
        <p className="signup-subtitle">Sign in here</p>

        <input
          type="text"
          placeholder="Username"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-button" onClick={handleSignIn}>
          Sign In
        </button>

        <div className="signup-links">
          <span className="forgot-link" onClick={() => navigate('/forgot-password')}>
            Forgot password
          </span>
          <span className="signin-link" onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

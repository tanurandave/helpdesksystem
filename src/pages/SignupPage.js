import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    if (!username || !password || !email) {
      setMessage('Please fill in all fields.');
      return;
    }
    setMessage('Sign Up Successful! Redirecting...');
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Helpdesk System</h2>
        <p className="signup-subtitle">Sign up here</p>

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
        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="signup-button" onClick={handleSignUp}>Sign Up</button>

        {message && <p className="signup-message">{message}</p>}

        <div className="signup-links">
          <span className="forgot-link" onClick={() => navigate('/forgot-password')}>
            Forgot password
          </span>
          <span className="signin-link" onClick={() => navigate('/')}>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }
    setMessage('Reset link sent to your email!');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h3 className="signup-subtitle">
          Don't worry. Enter your email below and we will send you a link to change password.
        </h3>

        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="signup-button"
          style={{ backgroundColor: 'green', marginBottom: '10px' }}
          onClick={handleSubmit}
        >
          Submit
        </button>

        <button
          className="signup-button"
          style={{ backgroundColor: '#0047ab' }}
          onClick={() => navigate('/')}
        >
          Sign In
        </button>

        {message && <p className="signup-message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;

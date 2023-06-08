import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="base-container">
      <div className="background-container" />
      <div className="login-container">
        <div className="title-container">
          <p className="title">Welcome back</p>
        </div>
        <form className="form-container">
          <label>Email</label>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-cy="input-email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-cy="input-password"
          />
          <button className="btn-login" type="submit">
            Sign In
          </button>
        </form>

        <div className="footer-title">
          <Link style={{ textDecoration: 'none' }} to="/forgot">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}

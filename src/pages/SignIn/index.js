import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'test@test.com' && password === '123123') {
      setLoggedIn(true);
    } else {
      alert('Login ou senha incorretos!');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Bem-vindo à tela Home!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

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
          <button className="btn-login" type="submit" onClick={handleLogin}>
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

import React, { useState } from 'react';
import '../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy user data
  const users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'student@example.com', password: 'student123', role: 'student' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simulate authentication
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate(user.role === 'admin' ? '/admin' : '/student');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

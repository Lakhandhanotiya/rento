// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import API from './api'; // your axios setup
import "./LoginSignUpPage.css";


const LoginPage = () => {
  const [auth, setAuth] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/authenticate', auth);
      localStorage.setItem('token', res.data.jwt);
      alert("Login successful");
      navigate('/'); // redirect to home/dashboard
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-signup-form">
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
        <Link to="/register">SignUp</Link>
    </form>
  );
};

export default LoginPage;

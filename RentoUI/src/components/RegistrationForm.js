// src/components/RegistrationForm.js
import React, { useState } from 'react';
import API from './api';
import "./LoginSignUpPage.css";
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    userName: '',
    password: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/auth/register', formData);
      alert("Registration successful");
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <form className = "login-signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="userName" placeholder="Username" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
      <Link to = "/login">Login</Link>
    </form>
  );
};

export default RegistrationForm;

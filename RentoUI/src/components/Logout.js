import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Remove the JWT (and any other persisted state)
    localStorage.removeItem('token');
    // 2. Optionally, clear other persisted app state...
    //    e.g. localStorage.removeItem('userProfile');

    // 3. Redirect to login page
    navigate('/login', { replace: true });
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
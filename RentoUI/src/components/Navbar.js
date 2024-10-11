// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-property">Add Property</Link></li>
        <li><Link to="/add-room">Add Room</Link></li>
        <li><Link to="/remove-property">Remove Property</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

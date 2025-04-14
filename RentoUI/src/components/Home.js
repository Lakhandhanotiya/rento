// Home.js
import React from 'react';
import './Home.css';
import Logout from './Logout';
const Home = () => {
  return (
    <div className="home-container">   
      <h1>Welcome to Room Rental Service</h1>
      <p>Find your perfect property and room today!</p>
      <Logout/>
    </div>
  );
};

export default Home;

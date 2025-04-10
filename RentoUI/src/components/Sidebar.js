import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/add-room">Add Room</Link>
        </li>
        <li>
          <Link to="/add-property">Add Property</Link>
        </li>
        <li>
          <Link to="/room-list">Room list</Link>
        </li>
        <li>
          <Link to="/properties">Property List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

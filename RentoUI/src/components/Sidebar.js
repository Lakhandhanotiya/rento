import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import Logout from "./Logout";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        ☰ Menu
      </div>

      <div className={`modern-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>RENTOROOM</h2>
        </div>
        <ul className="sidebar-menu">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">🏠 Home</Link>
          </li>
          <li className={location.pathname === "/add-room" ? "active" : ""}>
            <Link to="/add-room">➕ Add Room</Link>
          </li>
          <li className={location.pathname === "/add-property" ? "active" : ""}>
            <Link to="/add-property">🏢 Add Property</Link>
          </li>
          <li className={location.pathname === "/room-list" ? "active" : ""}>
            <Link to="/room-list">🛏️ Room List</Link>
          </li>
          <li
            className={location.pathname === "/property-list" ? "active" : ""}
          >
            <Link to="/property-list">📋 Property List</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

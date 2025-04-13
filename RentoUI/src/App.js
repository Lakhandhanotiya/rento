import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoomList from "./components/RoomList";
import AddProperty from "./components/AddProperty";
import PropertyList from "./components/PropertyList";
import Sidebar from "./components/Sidebar";
import AddRoom from "./components/AddRoom";
import Home from "./components/Home";
import LoginPage from './components/LoginPage';
import RegistrationForm from "./components/RegistrationForm";
import PrivateRoute from './components/PrivateRoute';

import "./App.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App d-flex">
        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationForm />} />

          {/* Protected Layout with Sidebar */}
          <Route path="/" element={
            <PrivateRoute>
              <div className="d-flex w-100">
                {isSidebarOpen && (
                  <div className="bg-light p-3 border-end" style={{ minWidth: '220px' }}>
                    <Sidebar />
                  </div>
                )}
                <div className="flex-grow-1 p-4">
                  <button className="btn btn-sm btn-primary mb-3" onClick={toggleSidebar}>
                    {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                  </button>
                  <Home />
                  <h1 className="mb-4">Room Rent Service</h1>
                  <RoomList />
                </div>
              </div>
            </PrivateRoute>
          } />

          {/* Other protected routes with same sidebar layout */}
          <Route path="/add-property" element={
            <PrivateRoute>
              <div className="d-flex w-100">
                {isSidebarOpen && (
                  <div className="bg-light p-3 border-end" style={{ minWidth: '220px' }}>
                    <Sidebar />
                  </div>
                )}
                <div className="flex-grow-1 p-4">
                  <AddProperty />
                </div>
              </div>
            </PrivateRoute>
          } />

          <Route path="/property-list" element={
            <PrivateRoute>
              <div className="d-flex w-100">
                {isSidebarOpen && (
                  <div className="bg-light p-3 border-end" style={{ minWidth: '220px' }}>
                    <Sidebar />
                  </div>
                )}
                <div className="flex-grow-1 p-4">
                  <PropertyList />
                </div>
              </div>
            </PrivateRoute>
          } />

          <Route path="/room-list" element={
            <PrivateRoute>
              <div className="d-flex w-100">
                {isSidebarOpen && (
                  <div className="bg-light p-3 border-end" style={{ minWidth: '220px' }}>
                    <Sidebar />
                  </div>
                )}
                <div className="flex-grow-1 p-4">
                  <RoomList />
                </div>
              </div>
            </PrivateRoute>
          } />

          <Route path="/add-room" element={
            <PrivateRoute>
              <div className="d-flex w-100">
                {isSidebarOpen && (
                  <div className="bg-light p-3 border-end" style={{ minWidth: '220px' }}>
                    <Sidebar />
                  </div>
                )}
                <div className="flex-grow-1 p-4">
                  <AddRoom />
                </div>
              </div>
            </PrivateRoute>
          } />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;


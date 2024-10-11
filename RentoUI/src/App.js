import React, { useState } from "react";
import RoomList from "./components/RoomList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProperty from "./components/AddProperty";
import PropertyList from "./components/PropertyList"; // Import PropertyList
import Sidebar from "./components/Sidebar";
import AddRoom from "./components/AddRoom";
//import AddProperty from "./components/AddProperty";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <Router>
      <div className="App">
        <button onClick={toggleSidebar} className="toggle-button">
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {isOpen && <Sidebar />} {/* Show sidebar if isOpen is true */}
        <Routes>
        <Route path="/add-property" element={<AddProperty />} />
        {/* <Route path="/property-list" element={<Propertylist />} />  */}
        <Route path="/room-list" element={<RoomList />} />
          <Route path="/add-room" element={<AddRoom />} /> {/* Use element instead of component */}
          <Route path="/properties" element={<PropertyList />} /> {/* Add PropertyList route */}
          <Route path="/" element={
            <>
              <h1>Room Rent Service</h1>
              <RoomList />
            </>
          } /> {/* Wrap multiple components in a fragment */}
        </Routes>
      </div>
    </Router>
  );
};
export default App;

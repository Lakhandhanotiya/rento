import React, { useEffect, useState } from "react";
import axios from "axios";
import './RoomList.css';

const RoomList = () => {
  const [rooms, setRooms] = useState([]); // Original rooms fetched from the API
  const [filteredRooms, setFilteredRooms] = useState([]); // Filtered rooms based on search
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  // Fetch rooms when the component loads
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/room/allrooms")
      .then((response) => {
        console.log("room list data: ", response.data);
        setRooms(response.data);
        setFilteredRooms(response.data); // Initialize filtered rooms with all rooms
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  // Handle search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase(); // Normalize search query
    setSearchQuery(query);

    // Filter rooms based on search query (name, description, or property name)
    const filtered = rooms.filter((room) => {
      return (
        room.name.toLowerCase().includes(query) ||
        room.description.toLowerCase().includes(query) ||
        room.property.name.toLowerCase().includes(query) ||  // Searching by property name
        room.price.toString().includes(query)  // Search by price as well
      );
    });

    setFilteredRooms(filtered); // Update the filtered rooms
  };

  return (
    <div>
      {/* Search Input */}
      <div className="search-container">
      <input
        type="text"
        placeholder="Search rooms..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
        </div>
        <h2>Available Rooms</h2>
      {filteredRooms.length > 0 ? (
        <div className="room-list">
          {filteredRooms.map((room) => (
            <div key={room.roomId} className="room-list">
              <h3>{room.name}</h3>
              <img
                src={room.imageUrl}
                alt={room.name}
                style={{ width: "200px", height: "150px" }}
              />
              <p><strong>Price:</strong> ${room.price}</p>
              <p><strong>Description:</strong> {room.description}</p>
              <p><strong>Property:</strong> {room.property.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No rooms found</p>
      )}
    </div>
  );
};

export default RoomList;

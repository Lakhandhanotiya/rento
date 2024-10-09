// src/components/RoomList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import './RoomList.css';


const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch all room details from the backend
    axios
      .get("http://localhost:8080/api/room/allrooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      {rooms.length > 0 ? (
        <div className="room-list">
          {rooms.map((room) => (
            <div key={room.id} className="room-list">
              <h3>{room.name}</h3>
              <img
                src={room.imageUrl}
                alt={room.name}
                style={{ width: "200px", height: "150px" }}
              />
              <p><strong>Price:</strong> ${room.price}</p>
              <p><strong>Description:</strong> {room.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
};

export default RoomList;

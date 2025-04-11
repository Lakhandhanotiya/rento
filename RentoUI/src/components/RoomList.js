import React, { useEffect, useState } from "react";
import API from "./api";
import './RoomList.css'; // You can keep this for custom styles if needed

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    API.get("/api/room/allrooms")
      .then((response) => {
        setRooms(response.data);
        setFilteredRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = rooms.filter((room) => {
      return (
        room.name.toLowerCase().includes(query) ||
        room.description.toLowerCase().includes(query) ||
        room.property.name.toLowerCase().includes(query) ||
        room.price.toString().includes(query)
      );
    });

    setFilteredRooms(filtered);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search rooms..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <h2 className="text-center mb-4">Available Rooms</h2>

      {filteredRooms.length > 0 ? (
        <div className="row">
          {filteredRooms.map((room) => (
            <div className="col-md-6 col-lg-4 mb-4" key={room.roomId}>
              <div className="card h-100 shadow-sm">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="card-img-top img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text"><strong>Price:</strong> ${room.price}</p>
                  <p className="card-text"><strong>Description:</strong> {room.description}</p>
                  <p className="card-text mt-auto"><strong>Property:</strong> {room.property.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No rooms found</p>
      )}
    </div>
  );
};

export default RoomList;

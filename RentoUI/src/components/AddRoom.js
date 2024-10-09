    // src/components/AddRoom.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddRoom.css";
import "./AddProperty.css";

const AddRoom = () => {
  const [properties, setProperties] = useState([]);
  const [room, setRoom] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    propertyId: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch properties when the component loads
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/properties/allproperties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/room/addroom", {
        name: room.name,
        price: parseFloat(room.price),
        description: room.description,
        imageUrl: room.imageUrl,
        property: {
          property_id: room.propertyId,
        },
      })
      .then((response) => {
        setSuccessMessage("Room added successfully!");
        setErrorMessage("");
        // Reset form
        setRoom({
          name: "",
          price: "",
          description: "",
          imageUrl: "",
          propertyId: "",
        });
      })
      .catch((error) => {
        setErrorMessage("Failed to add room. Please try again.");
        console.error("Error adding room:", error);
      });
  };

  return (
    <div className="add-room-container">
      <h2>Add New Room</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Room Name:</label>
          <input
            type="text"
            name="name"
            value={room.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={room.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={room.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={room.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Property:</label>
          <select
            name="propertyId"
            value={room.propertyId}
            onChange={handleChange}
            required
          >
            <option value="">Select Property</option>
            {properties.map((property) => (
              <option key={property.propertyId} value={property.propertyId}>
                {property.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;

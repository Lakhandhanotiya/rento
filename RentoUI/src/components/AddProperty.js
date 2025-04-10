import React, { useState } from "react";
import axios from "axios";
import L from "leaflet";  // Import Leaflet for map integration
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./AddProperty.css";

// Fix for missing default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
});

const AddProperty = () => {
  const [property, setProperty] = useState({
    name: "",
    address: "",
    imageUrl: "",
    latitude: "",  // New field for latitude
    longitude: "", // New field for longitude
  });
  
  const [position, setPosition] = useState([22.703379, 75.832781]); // Default coordinates for the map (London)
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/property/addproperty", property)
      .then((response) => {
        alert("Property added successfully!");
        setProperty({
          name: "",
          address: "",
          imageUrl: "",
          latitude: "", 
          longitude: "",
        });
      })
      .catch((error) => {
        console.error("Error adding the property!", error);
        alert("Failed to add the property");
      });
  };

  // Component to update position when the user clicks on the map
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);  // Update position
        setProperty((prevProperty) => ({
          ...prevProperty,
          latitude: e.latlng.lat,
          longitude: e.latlng.lng
        }));
      },
    });

    return position === null ? null : (
      <Marker position={position}></Marker>
    );
  };

  return (
    <div className="add-property-container">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-group">
          <label htmlFor="name">Property Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={property.name}
            onChange={handleChange}
            required
            placeholder="Enter property name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={property.address}
            onChange={handleChange}
            required
            placeholder="Enter property address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={property.imageUrl}
            onChange={handleChange}
            required
            placeholder="Enter image URL"
          />
        </div>

        {/* Map for selecting property location */}
        <div className="form-group">
          <label>Select Property Location:</label>
          <MapContainer
            center={position} // Set initial center position
            zoom={13} 
            scrollWheelZoom={false}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
          </MapContainer>
        </div>

        {/* Display latitude and longitude */}
        <div className="form-group">
          <label>Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={property.latitude}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={property.longitude}
            readOnly
          />
        </div>

        <button type="submit" className="submit-button">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;

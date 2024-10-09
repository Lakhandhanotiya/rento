// src/components/AddProperty.js
import React, { useState } from "react";
import axios from "axios";
import "./AddProperty.css";

const AddProperty = () => {
  const [property, setProperty] = useState({
    name: "",
    address: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/properties/addproperty", property)
      .then((response) => {
        alert("Property added successfully!");
        setProperty({ name: "", address: "", imageUrl: "" });
      })
      .catch((error) => {
        console.error("Error adding the property!", error);
        alert("Failed to add the property");
      });
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
        <button type="submit" className="submit-button">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;

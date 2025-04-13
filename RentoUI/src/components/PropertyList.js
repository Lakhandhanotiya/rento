// src/components/PropertyList.js
import React, { useEffect, useState } from "react";
import API from './api'; // your axios setup
import "./PropertyList.css"; // You can use the same styles as RoomList

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch all property details from the backend
    API.get("/api/property/allproperties")
      .then((response) => {
        console.log("property list data: ", response.data);
        setProperties(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });
  }, []);
  const handleDeleteProperty = (id) => {
    API
      .delete(`/api/property/deleteproperty/${id}`) // API call to delete the property
      .then(() => {
        // Filter out the deleted property from the state
        setProperties(
          properties.filter((property) => property.propertyId !== id)
        );
        console.log("Property deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting property:", error);
      });
  };

  return (
    <div>
      <h2>Available Properties</h2>
      {properties.length > 0 ? (
        <div className="property-list">
          {properties.map((property) => (
            <div key={property.propertyId} className="property-item">
              <h3>{property.name}</h3>
              <img
                src={property.imageUrl}
                alt={property.name}
                style={{ width: "200px", height: "150px" }}
              />
              <p>
                <strong>Address:</strong> {property.address}
              </p>
              <button onClick={() => handleDeleteProperty(property.propertyId)}>
                Delete Property
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No properties available</p>
      )}
    </div>
  );
};

export default PropertyList;

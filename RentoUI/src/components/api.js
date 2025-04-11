// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

API.interceptors.request.use((config) => {
  // Skip adding token for login and register endpoints
  const isAuthEndpoint =
    config.url.includes("/api/auth/authenticate") ||
    config.url.includes("/api/auth/register");

  const token = localStorage.getItem("token");
  if (token && !isAuthEndpoint) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

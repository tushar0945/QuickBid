// // src/api/axiosInstance.js
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api", // Change as per your backend
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Attach token automatically for all requests
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default axiosInstance;

// src/api/axiosInstance.js
import axios from "axios";
import.meta.env.VITE_API_URL ||
//const API_URL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: `${VITE_API_URL}`, // Automatically uses correct base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically for all requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

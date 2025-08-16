// src/api/authApi.js
import axiosInstance from "./axiosInstance";

export const loginUser = async (email, password) => {
  const response = await axiosInstance.post("/api/auth/login", {
    email,
    password,
  });
  return response.data; // should include { user, token }
};

export const registerUser = async (formData) => {
  //   console.log("Form data:", formData);

  const response = await axiosInstance.post("/api/auth/register", formData);
  // console.log("Register response:", response.data);
  return response.data;
};

// src/pages/auth/Logout.jsx
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // your auth context

export default function Logout() {
  const { logout } = useAuth(); // function to clear user session

  useEffect(() => {
    logout(); // clear token/session
  }, [logout]);

  // Redirect to login page after logout
  return <Navigate to="/login" replace />;
}

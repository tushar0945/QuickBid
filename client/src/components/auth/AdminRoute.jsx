import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminRoute() {
  const { isAuthenticated, role } = useAuth();

  return isAuthenticated && role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" />
  );
}

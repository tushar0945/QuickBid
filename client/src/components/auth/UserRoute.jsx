import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserRoute() {
  const { isAuthenticated, role } = useAuth();

  return isAuthenticated && role === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
}

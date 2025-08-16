import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RequireProfileCompletion({ children }) {
  const { hasCompletedProfileSetup, user } = useAuth();

  // 🚫 Block if not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🚫 Block if admin or seller role
  if (user.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (user.role === "seller") {
    return <Navigate to="/seller/dashboard" replace />;
  }

  // 🚫 Block if profile not completed
  if (!hasCompletedProfileSetup) {
    return <Navigate to="/profile/setting/account" replace />;
  }

  // ✅ Otherwise, render whatever was passed inside
  return children;
}

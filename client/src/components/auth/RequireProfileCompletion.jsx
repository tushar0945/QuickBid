import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RequireProfileCompletion() {
  const { hasCompletedProfileSetup, user } = useAuth();
  // 🚫 Block if not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🚫 Block if admin or seller role
  if (user.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />; // or another page if you prefer
  }

  if (user.role === "seller") {
    return <Navigate to="/seller/dashboard" replace />; // or another page if you prefer
  }
  if (!hasCompletedProfileSetup) {
    return <Navigate to="/profile/setting/account" replace />;
  }

  return <Outlet />; // renders nested profile routes if profile is complete
}

// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// export default function SellerRoute() {
//   const { isAuthenticated, role } = useAuth();

//   return isAuthenticated && role === "seller" ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/unauthorized" />
//   );
// }

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SellerRoute() {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role !== "seller") {
    return <Navigate to="/become-seller" />;
  }

  return <Outlet />;
}

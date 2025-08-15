// src/components/auth/ProfileRedirect.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProfileRedirect() {
  const {
    hasCompletedProfileSetup,
    hasVisitedProfile,
    setHasVisitedProfile,
    user,
  } = useAuth();

  const [shouldRedirect, setShouldRedirect] = useState(false);

  // ✅ Run only once when component mounts
  useEffect(() => {
    if (!hasVisitedProfile) {
      setHasVisitedProfile(true);
    }
    setShouldRedirect(true); // trigger the redirection
  }, []);

  // 🔄 Wait for useEffect to run before rendering <Navigate>
  if (!shouldRedirect) return null;

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

  // console.log(hasCompletedProfileSetup);
  if (!hasCompletedProfileSetup) {
    return <Navigate to="/profile/setting/account" replace />;
  } else {
    return <Navigate to="/profile/details" replace />;
  }
}

// // src/components/auth/ProfileRedirect.jsx
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// export default function ProfileRedirect() {
//   const {
//     hasCompletedProfileSetup,
//     hasVisitedProfile,
//     setHasVisitedProfile,
//   } = useAuth();

//   useEffect(() => {
//     if (!hasVisitedProfile) {
//       setHasVisitedProfile(true);
//     }
//   }, []);

//   if (!hasCompletedProfileSetup) {
//     return <Navigate to="/profile/setting/account" replace />;
//   }

//   return <Navigate to="/profile/details" replace />;
// }

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  const [hasVisitedProfile, setHasVisitedProfile] = useState(() => {
    return localStorage.getItem("hasVisitedProfile") === "true";
  });

  const [hasCompletedProfileSetup, setHasCompletedProfileSetup] = useState(
    () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        return parsed?.isProfileComplete || false;
      }
      return false;
    }
  );

  // Sync localStorage when values change
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [user, token]);

  useEffect(() => {
    localStorage.setItem("hasVisitedProfile", hasVisitedProfile);
  }, [hasVisitedProfile]);

  // Sync profile completion status with user
  useEffect(() => {
    if (user?.isProfileComplete !== undefined) {
      setHasCompletedProfileSetup(user.isProfileComplete);
    }
  }, [user]);

  // Token expiry auto logout
  useEffect(() => {
    if (token) {
      try {
        const { exp } = JSON.parse(atob(token.split(".")[1]));
        if (Date.now() >= exp * 1000) {
          logout();
        }
      } catch (err) {
        console.error("Invalid token format", err);
        logout();
      }
    }
  }, [token]);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setHasVisitedProfile(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("hasVisitedProfile");
  };

  const isAuthenticated = !!user;
  const role = user?.role || null;
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        role, // optional to use elsewhere
        login,
        logout,
        setUser,
        hasVisitedProfile,
        setHasVisitedProfile,
        hasCompletedProfileSetup,
        setHasCompletedProfileSetup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { useAuth } from "../../context/AuthContext"; // Assuming you use context

export default function Emails() {
  const navigate = useNavigate();
  const { token } = useAuth(); // Your JWT token
  const [emailUpdates, setEmailUpdates] = useState(false);
  const { setHasCompletedProfileSetup, setUser } = useAuth();

  useEffect(() => {
    // Fetch user preferences on mount
    const fetchPreferences = async () => {
      try {
        const response = await axiosInstance.get("/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setEmailUpdates(
          response.data.notificationPreferences?.emailUpdates || false
        );
      } catch (err) {
        console.error("Failed to fetch preferences", err);
      }
    };
    fetchPreferences();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(
        "/api/users/notifications",
        { emailUpdates },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Preferences saved!");
      // Update the local context
      // setHasCompletedProfileSetup(true);
      // setUser((prev) => ({ ...prev, profileCompleted: true }));
      setUser((prevUser) => {
        const updatedUser = { ...prevUser, isProfileComplete: true };
        localStorage.setItem("user", JSON.stringify(updatedUser)); // Persist to storage
        return updatedUser;
      });
      setHasCompletedProfileSetup(true); // This now syncs from updated user

      navigate("/profile/details");
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to save preferences");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-4">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
        Email Preferences
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email toggle */}
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
          <span className="text-sm sm:text-base font-medium text-gray-900">
            Enable email notifications
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={emailUpdates}
              onChange={() => setEmailUpdates(!emailUpdates)}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
}

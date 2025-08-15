// import React from "react";

// export default function Emails() {
//   return (
//     <div className="w-[750px] h-[700px] sm:ml-0 md:ml-[250px] mt-[80px] min-h-screen bg-pink-50 pt-[100px] sm:pt-[120px] md:pt-[150px] px-4">
//       <label class="inline-flex items-center cursor-pointer">
//         <input type="checkbox" value="" class="sr-only peer" checked />
//         <div
//           class="relative w-11 h-6 bg-gray-200 rounded-full
//     peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700
//     peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
//     peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px]
//     after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
//     after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
//         ></div>
//         <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
//           Checked toggle
//         </span>
//       </label>
//     </div>
//   );
// }

// import React from "react";

// export default function Emails() {
//   return (
//     <div className="w-full max-w-4xl mx-auto pt-4">
//       <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
//         Email Preferences
//       </p>

//       <form className="space-y-6">
//         {/* Notification Toggle */}
//         <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
//           <span className="text-sm sm:text-base font-medium text-gray-900">
//             Enable email notifications
//           </span>
//           <label className="inline-flex items-center cursor-pointer">
//             <input type="checkbox" defaultChecked className="sr-only peer" />
//             <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
//           </label>
//         </div>

//         {/* Optional toggle 2 */}
//         <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
//           <span className="text-sm sm:text-base font-medium text-gray-900">
//             Receive promotional emails
//           </span>
//           <label className="inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" />
//             <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
//           </label>
//         </div>

//         {/* Optional toggle 3 */}
//         <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
//           <span className="text-sm sm:text-base font-medium text-gray-900">
//             Product update notifications
//           </span>
//           <label className="inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" />
//             <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center pt-4">
//           <button
//             type="submit"
//             className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Save Preferences
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Emails() {
//   const [emailNotifications, setEmailNotifications] = useState(false);
//   const [promotionalEmails, setPromotionalEmails] = useState(false);

//   useEffect(() => {
//     // Fetch current preferences
//     const fetchPreferences = async () => {
//       try {
//         const { data } = await axios.get("/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         setEmailNotifications(data.emailNotifications || false);
//         setPromotionalEmails(data.promotionalEmails || false);
//       } catch (error) {
//         console.error("Error fetching preferences:", error);
//       }
//     };

//     fetchPreferences();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         "/api/users/profile/preferences",
//         {
//           emailNotifications,
//           promotionalEmails,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       alert("Preferences saved!");
//     } catch (error) {
//       console.error("Error saving preferences:", error);
//       alert("Failed to save preferences");
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto pt-4">
//       <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
//         Email Preferences
//       </p>

//       <form className="space-y-6" onSubmit={handleSubmit}>
//         {/* Email Notifications */}
//         <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
//           <span className="text-sm sm:text-base font-medium text-gray-900">
//             Enable email notifications
//           </span>
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only peer"
//               checked={emailNotifications}
//               onChange={(e) => setEmailNotifications(e.target.checked)}
//             />
//             <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
//           </label>
//         </div>

//         {/* Promotional Emails */}
//         <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
//           <span className="text-sm sm:text-base font-medium text-gray-900">
//             Receive promotional emails
//           </span>
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only peer"
//               checked={promotionalEmails}
//               onChange={(e) => setPromotionalEmails(e.target.checked)}
//             />
//             <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center pt-4">
//           <button
//             type="submit"
//             className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Save Preferences
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
        const response = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

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
      await axios.put(
        "http://localhost:5000/api/users/notifications",
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

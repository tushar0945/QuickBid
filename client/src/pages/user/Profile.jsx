// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// // Mocked user data – in real apps, fetch this from API or context
// const user = {
//   name: "Tushar Patil",
//   email: "tushar@example.com",
//   avatar: "https://i.pravatar.cc/150?img=32",
//   joined: "March 2025",
//   orders: 12,
//   addresses: 3,
//   walletBalance: 3200,
//   messages: 5,
// };

// export default function Profile() {
//   const { logout } = useAuth();
//   const navigate = useNavigate(); // ✅ Navigation hook
//   const handleLogout = () => {
//     logout();
//     navigate("/login"); // or navigate("/") for homepage
//   };
//   return (
//     <div className="pt-4 min-h-screen px-4 py-6">
//       {/* User Info Card */}
//       <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start md:space-x-6">
//         <img
//           src={user.avatar}
//           alt="Profile"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div className="mt-4 md:mt-0">
//           <h2 className="text-xl font-bold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>
//           <p className="text-sm text-gray-400 mt-1">Joined: {user.joined}</p>
//           <Link
//             to="/profile/account"
//             className="mt-3 inline-block text-sm text-blue-600 hover:underline"
//           >
//             Edit Profile
//           </Link>
//         </div>
//       </div>

//       {/* Quick Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">{user.orders}</h3>
//           <p className="text-gray-600 text-sm">Orders</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">{user.addresses}</h3>
//           <p className="text-gray-600 text-sm">Addresses</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">₹{user.walletBalance}</h3>
//           <p className="text-gray-600 text-sm">Wallet</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">{user.messages}</h3>
//           <p className="text-gray-600 text-sm">Messages</p>
//         </div>
//       </div>

//       {/* Activity Log */}
//       <div className="mt-6 bg-white shadow rounded-lg p-4">
//         <h3 className="text-md font-semibold mb-2">Recent Activity</h3>
//         <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
//           <li>
//             You placed a bid on{" "}
//             <span className="text-blue-600">"iPhone 14 Pro"</span>.
//           </li>
//           <li>
//             You added{" "}
//             <span className="text-blue-600">"Samsung Smartwatch"</span> to your
//             wishlist.
//           </li>
//           <li>Your address was updated successfully.</li>
//         </ul>
//       </div>

//       {/* Quick Links Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Link
//           to="/profile/bids"
//           className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded shadow hover:bg-yellow-100 text-center"
//         >
//           My Bids
//         </Link>
//         <Link
//           to="/profile/wishlist"
//           className="bg-pink-50 border border-pink-200 text-pink-700 p-4 rounded shadow hover:bg-pink-100 text-center"
//         >
//           Wishlist
//         </Link>
//         <Link
//           to="/profile/notifications"
//           className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded shadow hover:bg-blue-100 text-center"
//         >
//           Notifications
//         </Link>
//       </div>
//       <button
//         onClick={handleLogout}
//         className="mt-10 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";

// export default function Profile() {
//   const { logout, token, user } = useAuth();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     if (!user?._id) return;
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/users/${user._id}/userdetails`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         console.log(res.data);
//         setUserData(res.data);
//       } catch (error) {
//         console.error("Failed to fetch profile", error);
//         if (error.response?.status === 401) {
//           logout();
//           navigate("/login");
//         }
//       }
//     };

//     fetchProfile();
//   }, [token, user]);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   if (!userData) return <p className="p-6">Loading profile...</p>;

//   return (
//     <div className="pt-4 min-h-screen px-4 py-6">
//       {/* User Info Card */}
//       <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start md:space-x-6">
//         <img
//           src={userData.avatar}
//           alt="Profile"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div className="mt-4 md:mt-0">
//           <h2 className="text-xl font-bold">{userData.name}</h2>
//           <p className="text-gray-600">{userData.email}</p>
//           <p className="text-sm text-gray-400 mt-1">
//             Joined: {userData.joined}
//           </p>
//           <Link
//             to="/profile/account"
//             className="mt-3 inline-block text-sm text-blue-600 hover:underline"
//           >
//             Edit Profile
//           </Link>
//         </div>
//       </div>

//       {/* Quick Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">{userData.orders}</h3>
//           <p className="text-gray-600 text-sm">Orders</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">{userData.addresses}</h3>
//           <p className="text-gray-600 text-sm">Addresses</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">₹{userData.walletBalance}</h3>
//           <p className="text-gray-600 text-sm">Wallet</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-4 text-center">
//           <h3 className="text-xl font-semibold">{userData.messages}</h3>
//           <p className="text-gray-600 text-sm">Messages</p>
//         </div>
//       </div>

//       {/* Activity Log */}
//       <div className="mt-6 bg-white shadow rounded-lg p-4">
//         <h3 className="text-md font-semibold mb-2">Recent Activity</h3>
//         <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
//           <li>
//             You placed a bid on{" "}
//             <span className="text-blue-600">"iPhone 14 Pro"</span>.
//           </li>
//           <li>
//             You added{" "}
//             <span className="text-blue-600">"Samsung Smartwatch"</span> to your
//             wishlist.
//           </li>
//           <li>Your address was updated successfully.</li>
//         </ul>
//       </div>

//       {/* Quick Links Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Link
//           to="/profile/bids"
//           className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded shadow hover:bg-yellow-100 text-center"
//         >
//           My Bids
//         </Link>
//         <Link
//           to="/profile/wishlist"
//           className="bg-pink-50 border border-pink-200 text-pink-700 p-4 rounded shadow hover:bg-pink-100 text-center"
//         >
//           Wishlist
//         </Link>
//         <Link
//           to="/profile/notifications"
//           className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded shadow hover:bg-blue-100 text-center"
//         >
//           Notifications
//         </Link>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="mt-10 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { logout, token, user } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // if (!user?._id) return;
    // console.log(user);
    if (!user || !user._id) return;

    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get(
          `http://localhost:5000/api/users/${user._id}/userdetails`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(res.data); // You’ll see: { user: {...}, orders: [], notifications: [] }
        setUserData(res.data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
        if (error.response?.status === 401) {
          logout();
          navigate("/login");
        }
      }
    };

    fetchProfile();
  }, [token, user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!userData) return <p className="p-6">Loading profile...</p>;

  const { user: userInfo, orders, notifications } = userData;

  return (
    <div className="pt-4 min-h-screen px-4 py-6">
      {/* User Info Card */}
      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start md:space-x-6">
        <img
          src={userInfo.avatar || "/user/userAvtar.jpg"} // fallback avatar
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-xl font-bold">
            {userInfo.firstName} {userInfo.lastName}
          </h2>
          <p className="text-gray-600">{userInfo.email}</p>
          <p className="text-sm text-gray-400 mt-1">
            Joined: {new Date(userInfo.createdAt).toLocaleDateString()}
          </p>
          <Link
            to="/profile/setting/account"
            className="mt-3 inline-block text-sm text-blue-600 hover:underline"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">{orders?.length || 0}</h3>
          <p className="text-gray-600 text-sm">Orders</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">{userInfo.address ? 1 : 0}</h3>
          <p className="text-gray-600 text-sm">Addresses</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">₹{userInfo.walletBalance}</h3>
          <p className="text-gray-600 text-sm">Wallet</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">
            {notifications?.length || 0}
          </h3>
          <p className="text-gray-600 text-sm">Messages</p>
        </div>
      </div>

      {/* Activity Log */}
      <div className="mt-6 bg-white shadow rounded-lg p-4">
        <h3 className="text-md font-semibold mb-2">Recent Activity</h3>
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
          <li>
            You placed a bid on{" "}
            <span className="text-blue-600">"iPhone 14 Pro"</span>.
          </li>
          <li>
            You added{" "}
            <span className="text-blue-600">"Samsung Smartwatch"</span> to your
            wishlist.
          </li>
          <li>Your address was updated successfully.</li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/profile/bids"
          className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded shadow hover:bg-yellow-100 text-center"
        >
          My Bids
        </Link>
        <Link
          to="/profile/wishlist"
          className="bg-pink-50 border border-pink-200 text-pink-700 p-4 rounded shadow hover:bg-pink-100 text-center"
        >
          Wishlist
        </Link>
        <Link
          to="/profile/notifications"
          className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded shadow hover:bg-blue-100 text-center"
        >
          Notifications
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="mt-10 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

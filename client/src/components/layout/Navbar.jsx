// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaBell, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { useAuth } from "../../context/AuthContext"; // ✅ your auth context

// export default function Profile() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth(); // Example: { name: "Tushar", role: "admin" }

//   // console.log(user);

//   const isAdmin = user?.role === "admin";
//   // console.log(isAdmin);
//   const isSeller = user?.role === "seller";
//   const isNormalUser = user?.role === "user";

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="flex flex-wrap items-center justify-between px-4 py-3 shadow-md bg-white md:px-6 md:py-4">
//         {/* Left: Logo + Hamburger */}
//         <div className="flex items-center justify-between w-full md:w-auto">
//           <div className="flex items-center space-x-6">
//             <div
//               className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm shadow-md cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               <span className="text-white font-extrabold text-3xl leading-none -mt-1">
//                 Q
//               </span>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <FaTimes className="text-blue-600 text-xl transition-transform duration-300" />
//             ) : (
//               <FaBars className="text-blue-600 text-xl transition-transform duration-300" />
//             )}
//           </button>
//         </div>

//         {/* Center: Search */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out ${
//             isMenuOpen ? "block" : "hidden"
//           } w-full mt-3 md:mt-0 md:flex md:items-center md:w-auto md:flex-1 md:max-w-xl md:mx-4`}
//         >
//           <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
//             <FiSearch className="text-blue-600 text-lg mr-2" />
//             <input
//               type="text"
//               placeholder="Search for brand, model, artist..."
//               className="bg-transparent outline-none w-full"
//             />
//           </div>
//         </div>

//         {/* Right: Navigation Links and Icons */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out ${
//             isMenuOpen ? "max-h-screen" : "max-h-0"
//           } md:max-h-full md:flex md:items-center md:justify-between md:mt-4`}
//         >
//           {/* Navigation Links */}
//           <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 md:items-center mr-3">
//             {/* Only normal user */}
//             {isNormalUser && (
//               <>
//                 <button
//                   className="text-left md:text-center hover:underline pr-4"
//                   onClick={() => navigate("/seller")}
//                 >
//                   Sell
//                 </button>
//                 {/* <button
//                   className="text-left md:text-center hover:underline"
//                   onClick={() => navigate("/help")}
//                 >
//                   Help
//                 </button> */}
//               </>
//             )}

//             {/* Admin Dashboard */}
//             {isAdmin && (
//               <button
//                 className="text-left md:text-center hover:underline text-red-600"
//                 onClick={() => navigate("/admin/dashboard")}
//               >
//                 Admin Dashboard
//               </button>
//             )}

//             {/* Seller Dashboard */}
//             {isSeller && (
//               <button
//                 className="text-left md:text-center hover:underline text-green-600"
//                 onClick={() => navigate("/seller/dashboard")}
//               >
//                 Seller Dashboard
//               </button>
//             )}
//           </div>

//           {/* Icons for normal user */}
//           {isNormalUser && (
//             <div className="flex items-center space-x-6 pt-3 md:pt-0 mt-3 md:mt-0 border-t md:border-t-0 border-gray-200 md:border-none">
//               <FaHeart
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/wishlist")}
//               />
//               <FaBell
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/notifications")}
//               />
//               <div className="relative">
//                 <FaUserCircle
//                   className="text-blue-600 text-xl cursor-pointer"
//                   onClick={() => navigate("/profile")}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaBell, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { useAuth } from "../../context/AuthContext"; // ✅ your auth context

// export default function Profile() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth(); // Example: { name: "Tushar", role: "admin" }

//   const isAdmin = user?.role === "admin";
//   const isSeller = user?.role === "seller";
//   const isNormalUser = user?.role === "user";

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="flex flex-wrap items-center justify-between px-4 py-3 shadow-md bg-white md:px-6 md:py-4">
//         {/* Left: Logo + Hamburger */}
//         <div className="flex items-center justify-between w-full md:w-auto">
//           <div className="flex items-center space-x-6">
//             <div
//               className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm shadow-md cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               <span className="text-white font-extrabold text-3xl leading-none -mt-1">
//                 Q
//               </span>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <FaTimes className="text-blue-600 text-xl transition-transform duration-300" />
//             ) : (
//               <FaBars className="text-blue-600 text-xl transition-transform duration-300" />
//             )}
//           </button>
//         </div>

//         {/* Center: Search */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out ${
//             isMenuOpen ? "block" : "hidden"
//           } w-full mt-3 md:mt-0 md:flex md:items-center md:w-auto md:flex-1 md:max-w-xl md:mx-4`}
//         >
//           <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
//             <FiSearch className="text-blue-600 text-lg mr-2" />
//             <input
//               type="text"
//               placeholder="Search for brand, model, artist..."
//               className="bg-transparent outline-none w-full"
//             />
//           </div>
//         </div>

//         {/* Right: Navigation Links and Icons */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out ${
//             isMenuOpen ? "max-h-screen" : "max-h-0"
//           } md:max-h-full md:flex md:items-center md:justify-between md:mt-4`}
//         >
//           {/* Navigation Links */}
//           <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 md:items-center mr-3">
//             {/* Only normal user */}
//             {isNormalUser && (
//               <>
//                 <button
//                   className="text-left md:text-center hover:underline pr-4"
//                   onClick={() => navigate("/seller")}
//                 >
//                   Sell
//                 </button>
//               </>
//             )}

//             {/* Admin Dashboard */}
//             {isAdmin && (
//               <button
//                 className="text-left md:text-center hover:underline text-red-600"
//                 onClick={() => navigate("/admin/dashboard")}
//               >
//                 Admin Dashboard
//               </button>
//             )}

//             {/* Seller Dashboard */}
//             {isSeller && (
//               <button
//                 className="text-left md:text-center hover:underline text-green-600"
//                 onClick={() => navigate("/seller/dashboard")}
//               >
//                 Seller Dashboard
//               </button>
//             )}
//           </div>

//           {/* Show Login & Register only when user is NOT logged in */}
//           {!user && (
//             <div className="flex items-center space-x-4 mt-3 md:mt-0">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate("/register")}
//                 className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               >
//                 Register
//               </button>
//             </div>
//           )}

//           {/* Icons for normal user */}
//           {isNormalUser && (
//             <div className="flex items-center space-x-6 pt-3 md:pt-0 mt-3 md:mt-0 border-t md:border-t-0 border-gray-200 md:border-none">
//               <FaHeart
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/wishlist")}
//               />
//               <FaBell
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/notifications")}
//               />
//               <div className="relative">
//                 <FaUserCircle
//                   className="text-blue-600 text-xl cursor-pointer"
//                   onClick={() => navigate("/profile")}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaBell, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { useAuth } from "../../context/AuthContext"; // ✅ your auth context

// export default function Profile() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth(); // Example: { name: "Tushar", role: "admin" }

//   const isAdmin = user?.role === "admin";
//   const isSeller = user?.role === "seller";
//   const isNormalUser = user?.role === "user";

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-4 py-3 shadow-md bg-white md:px-6 md:py-4">
//         {/* Left: Logo + Hamburger */}
//         <div className="flex items-center">
//           <div
//             className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm shadow-md cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             <span className="text-white font-extrabold text-3xl leading-none -mt-1">
//               Q
//             </span>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2 ml-3"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <FaTimes className="text-blue-600 text-xl transition-transform duration-300" />
//             ) : (
//               <FaBars className="text-blue-600 text-xl transition-transform duration-300" />
//             )}
//           </button>
//         </div>

//         {/* Center: Search */}
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } w-full md:block md:flex-1 md:max-w-xl md:mx-6`}
//         >
//           <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
//             <FiSearch className="text-blue-600 text-lg mr-2" />
//             <input
//               type="text"
//               placeholder="Search for brand, model, artist..."
//               className="bg-transparent outline-none w-full"
//             />
//           </div>
//         </div>

//         {/* Right: Navigation Links and Icons */}
//         <div
//           className={`${
//             isMenuOpen ? "block mt-3" : "hidden"
//           } md:flex md:items-center md:space-x-6`}
//         >
//           {/* Navigation Links */}
//           {isNormalUser && (
//             <button
//               className="hover:underline"
//               onClick={() => navigate("/seller")}
//             >
//               Sell
//             </button>
//           )}
//           {isAdmin && (
//             <button
//               className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               onClick={() => navigate("/admin/dashboard")}
//             >
//               Dashboard
//             </button>
//           )}
//           {isSeller && (
//             <button
//               className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               onClick={() => navigate("/seller/dashboard")}
//             >
//               Dashboard
//             </button>
//           )}

//           {/* Show Login & Register only when user is NOT logged in */}
//           {!user && (
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate("/register")}
//                 className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               >
//                 Register
//               </button>
//             </div>
//           )}
//           {/* Icons for normal user */}
//           {isNormalUser && (
//             <div className="flex items-center space-x-6">
//               <FaHeart
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/wishlist")}
//               />
//               <FaBell
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/notifications")}
//               />
//               <FaUserCircle
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile")}
//               />
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaBell, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { useAuth } from "../../context/AuthContext"; // ✅ your auth context

// export default function Profile() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth(); // Example: { name: "Tushar", role: "admin" }

//   const isAdmin = user?.role === "admin";
//   const isSeller = user?.role === "seller";
//   const isNormalUser = user?.role === "user";

//   return (
//     <nav className="shadow-md bg-white px-4 py-3 md:px-6 md:py-4">
//       <div className="flex items-center justify-between">
//         {/* Left: Logo */}
//         <div
//           className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm shadow-md cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <span className="text-white font-extrabold text-3xl leading-none -mt-1">
//             Q
//           </span>
//         </div>

//         {/* Center: Search (hidden on mobile, visible on md+) */}
//         <div className="hidden md:flex flex-1 max-w-xl mx-6">
//           <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
//             <FiSearch className="text-blue-600 text-lg mr-2" />
//             <input
//               type="text"
//               placeholder="Search for brand, model, artist..."
//               className="bg-transparent outline-none w-full"
//             />
//           </div>
//         </div>

//         {/* Right: Desktop Navigation + Icons */}
//         <div className="hidden md:flex items-center space-x-6">
//           {isNormalUser && (
//             <button
//               className="hover:underline"
//               onClick={() => navigate("/seller")}
//             >
//               Sell
//             </button>
//           )}
//           {isAdmin && (
//             <button
//               className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
//               onClick={() => navigate("/admin/dashboard")}
//             >
//               Dashboard
//             </button>
//           )}
//           {isSeller && (
//             <button
//               className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
//               onClick={() => navigate("/seller/dashboard")}
//             >
//               Dashboard
//             </button>
//           )}

//           {!user && (
//             <div className="flex items-center space-x-3">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate("/register")}
//                 className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
//               >
//                 Register
//               </button>
//             </div>
//           )}

//           {isNormalUser && (
//             <div className="flex items-center space-x-5">
//               <FaHeart
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/wishlist")}
//               />
//               <FaBell
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/notifications")}
//               />
//               <FaUserCircle
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile")}
//               />
//             </div>
//           )}
//         </div>

//         {/* Hamburger (mobile only) */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <FaTimes className="text-blue-600 text-2xl" />
//           ) : (
//             <FaBars className="text-blue-600 text-2xl" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="space-y-4">
//           {/* Search */}
//           <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
//             <FiSearch className="text-blue-600 text-lg mr-2" />
//             <input
//               type="text"
//               placeholder="Search for brand, model, artist..."
//               className="bg-transparent outline-none w-full"
//             />
//           </div>

//           {/* Links */}
//           {isNormalUser && (
//             <button
//               className="block w-full text-left hover:underline"
//               onClick={() => navigate("/seller")}
//             >
//               Sell
//             </button>
//           )}
//           {isAdmin && (
//             <button
//               className="block w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               onClick={() => navigate("/admin/dashboard")}
//             >
//               Dashboard
//             </button>
//           )}
//           {isSeller && (
//             <button
//               className="block w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               onClick={() => navigate("/seller/dashboard")}
//             >
//               Dashboard
//             </button>
//           )}

//           {!user && (
//             <div className="flex flex-col space-y-3">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="w-full px-4 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate("/register")}
//                 className="w-full px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               >
//                 Register
//               </button>
//             </div>
//           )}

//           {isNormalUser && (
//             <div className="flex items-center space-x-6 pt-3 border-t border-gray-200">
//               <FaHeart
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/wishlist")}
//               />
//               <FaBell
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile/notifications")}
//               />
//               <FaUserCircle
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile")}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHeart, FaBell, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // 👈 track route changes
  const menuRef = useRef(null);
  const { user } = useAuth();

  const isAdmin = user?.role === "admin";
  const isSeller = user?.role === "seller";
  const isNormalUser = user?.role === "user";

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu automatically when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="shadow-md bg-white px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div
          className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm shadow-md cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-white font-extrabold text-3xl leading-none -mt-1">
            Q
          </span>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
            <FiSearch className="text-blue-600 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search for brand, model, artist..."
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Right: Desktop Navigation + Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {isNormalUser && (
            <button
              className="hover:underline"
              onClick={() => {
                navigate("/seller");
                setIsMenuOpen(false); // 👈 close menu
              }}
            >
              Sell
            </button>
          )}
          {isAdmin && (
            <button
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              onClick={() => {
                navigate("/admin/dashboard");
                setIsMenuOpen(false);
              }}
            >
              Dashboard
            </button>
          )}
          {isSeller && (
            <button
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              onClick={() => {
                navigate("/seller/dashboard");
                setIsMenuOpen(false);
              }}
            >
              Dashboard
            </button>
          )}
          {!user && (
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
                className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/register");
                  setIsMenuOpen(false);
                }}
                className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                Register
              </button>
            </div>
          )}
          {isNormalUser && (
            <div className="flex items-center space-x-5">
              <FaHeart
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => {
                  navigate("/profile/wishlist");
                  setIsMenuOpen(false);
                }}
              />
              <FaBell
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => {
                  navigate("/profile/notifications");
                  setIsMenuOpen(false);
                }}
              />
              <FaUserCircle
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => {
                  navigate("/profile");
                  setIsMenuOpen(false);
                }}
              />
            </div>
          )}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="text-blue-600 text-2xl" />
          ) : (
            <FaBars className="text-blue-600 text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef} // 👈 attach ref for outside click
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4">
          {/* Search */}
          <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
            <FiSearch className="text-blue-600 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search for brand, model, artist..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* Links */}
          {isNormalUser && (
            <button
              className="block w-full text-left hover:underline"
              onClick={() => {
                navigate("/seller");
                setIsMenuOpen(false);
              }}
            >
              Sell
            </button>
          )}
          {isAdmin && (
            <button
              className="block w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              onClick={() => {
                navigate("/admin/dashboard");
                setIsMenuOpen(false);
              }}
            >
              Dashboard
            </button>
          )}
          {isSeller && (
            <button
              className="block w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              onClick={() => {
                navigate("/seller/dashboard");
                setIsMenuOpen(false);
              }}
            >
              Dashboard
            </button>
          )}

          {!user && (
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/register");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Register
              </button>
            </div>
          )}

          {isNormalUser && (
            <div className="flex items-center space-x-6 pt-3 border-t border-gray-200">
              <FaHeart
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => {
                  navigate("/profile/wishlist");
                  setIsMenuOpen(false);
                }}
              />
              <FaBell
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => {
                  navigate("/profile/notifications");
                  setIsMenuOpen(false);
                }}
              />
              <FaUserCircle
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => {
                  navigate("/profile");
                  setIsMenuOpen(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

// import { NavLink } from "react-router-dom";
// import publicRoutes from "../routes/publicRoutes";

// const Navbar = () => {
//   return (
//     <nav className=" text-black p-4 font-bold flex justify-between">
//       <img src="../../public/QuickBid.png" alt="" />
//       <ul className="flex gap-4 ">
//         {publicRoutes
//           .filter((route) => route.meta?.showInNav)
//           .map((route, index) => (
//             <li key={index}>
//               <NavLink
//                 to={route.path}
//                 className={({ isActive }) =>
//                   isActive ? "text-sky-400" : "text-black"
//                 }
//               >
//                 {route.meta.label}
//               </NavLink>
//             </li>
//           ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import publicRoutes from "../routes/publicRoutes";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="text-black p-4 font-bold flex justify-between items-center">
//       <div className="flex items-center justify-between w-full md:w-auto">
//         <img
//           src="/QuickBid.png"
//           alt="QuickBid Logo"
//           className="h-8 md:h-10" // Responsive logo size
//         />

//         {/* Hamburger button for mobile */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Navigation links */}
//       <ul
//         className={`
//         ${isMenuOpen ? "flex" : "hidden"}
//         md:flex flex-col md:flex-row gap-4
//         absolute md:static top-16 left-0
//         w-full md:w-auto bg-white md:bg-transparent
//         p-4 md:p-0 shadow-md md:shadow-none
//       `}
//       >
//         {publicRoutes
//           .filter((route) => route.meta?.showInNav)
//           .map((route, index) => (
//             <li key={index}>
//               <NavLink
//                 to={route.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-sky-400"
//                     : "text-black hover:text-sky-400 transition-colors"
//                 }
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {route.meta.label}
//               </NavLink>
//             </li>
//           ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaBell, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";

// export default function Profile() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate(); // ✅

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

//         {/* Center: Search - moves to top on mobile */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out${
//             isMenuOpen ? "block" : "hidden"
//           } w-full mt-3 md:mt-0 md:flex md:items-center md:w-auto md:flex-1 md:max-w-xl md:mx-4`}
//         >
//           <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md ">
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
//           } md:max-h-full md:flex md:items-center md:justify-between md:mt-4 `}
//         >
//           {/* Navigation Links */}
//           <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 md:items-center mr-3 ">
//             <button
//               className="text-left md:text-center hover:underline"
//               onClick={() => navigate("/")}
//             >
//               Categories ▾
//             </button>
//             <button
//               className="text-left md:text-center hover:underline"
//               onClick={() => navigate("/sell")}
//             >
//               Sell
//             </button>
//             <button
//               className="text-left md:text-center hover:underline "
//               onClick={() => navigate("/help")}
//             >
//               Help
//             </button>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-6 pt-3 md:pt-0 mt-3 md:mt-0 border-t md:border-t-0 border-gray-200 md:border-none">
//             <FaHeart
//               className="text-blue-600 text-xl cursor-pointer"
//               onClick={() => navigate("/profile/wishlist")}
//             />
//             <FaBell
//               className="text-blue-600 text-xl cursor-pointer"
//               onClick={() => navigate("/profile/notifications")}
//             />
//             <div className="relative">
//               <FaUserCircle
//                 className="text-blue-600 text-xl cursor-pointer"
//                 onClick={() => navigate("/profile")}
//               />
//               <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5"></span>
//             </div>
//           </div>
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
//   const { user } = useAuth(); // ✅ Example: { name: "Tushar", role: "admin" }

//   console.log(user);
//   const isAdmin = user?.isAdmin == "true";
//   console.log(isAdmin);
//   const isSeller = user?.role === "seller";

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
//           className={`overflow-hidden transition-all duration-500 ease-in-out${
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
//             {/* Only show if normal user */}
//             {!user.isAdmin && !isSeller && (
//               <>
//                 <button
//                   className="text-left md:text-center hover:underline"
//                   onClick={() => navigate("/categories")}
//                 >
//                   Categories ▾
//                 </button>
//                 <button
//                   className="text-left md:text-center hover:underline"
//                   onClick={() => navigate("/sell")}
//                 >
//                   Sell
//                 </button>
//                 <button
//                   className="text-left md:text-center hover:underline"
//                   onClick={() => navigate("/help")}
//                 >
//                   Help
//                 </button>
//               </>
//             )}

//             {/* Admin Dashboard */}
//             {user.isAdmin && (
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

//           {/* Icons */}
//           {!user.isAdmin && !isSeller && (
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBell, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext"; // ✅ your auth context

export default function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth(); // Example: { name: "Tushar", role: "admin" }

  // console.log(user);

  const isAdmin = user?.role === "admin";
  // console.log(isAdmin);
  const isSeller = user?.role === "seller";
  const isNormalUser = user?.role === "user";

  return (
    <>
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between px-4 py-3 shadow-md bg-white md:px-6 md:py-4">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-6">
            <div
              className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-sm shadow-md cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="text-white font-extrabold text-3xl leading-none -mt-1">
                Q
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-blue-600 text-xl transition-transform duration-300" />
            ) : (
              <FaBars className="text-blue-600 text-xl transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Center: Search */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } w-full mt-3 md:mt-0 md:flex md:items-center md:w-auto md:flex-1 md:max-w-xl md:mx-4`}
        >
          <div className="flex items-center w-full bg-gray-100 px-3 py-2 rounded-md">
            <FiSearch className="text-blue-600 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search for brand, model, artist..."
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Right: Navigation Links and Icons */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } md:max-h-full md:flex md:items-center md:justify-between md:mt-4`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 md:items-center mr-3">
            {/* Only normal user */}
            {isNormalUser && (
              <>
                <button
                  className="text-left md:text-center hover:underline"
                  onClick={() => navigate("/categories")}
                >
                  Categories ▾
                </button>
                <button
                  className="text-left md:text-center hover:underline"
                  onClick={() => navigate("/sell")}
                >
                  Sell
                </button>
                <button
                  className="text-left md:text-center hover:underline"
                  onClick={() => navigate("/help")}
                >
                  Help
                </button>
              </>
            )}

            {/* Admin Dashboard */}
            {isAdmin && (
              <button
                className="text-left md:text-center hover:underline text-red-600"
                onClick={() => navigate("/admin/dashboard")}
              >
                Admin Dashboard
              </button>
            )}

            {/* Seller Dashboard */}
            {isSeller && (
              <button
                className="text-left md:text-center hover:underline text-green-600"
                onClick={() => navigate("/seller/dashboard")}
              >
                Seller Dashboard
              </button>
            )}
          </div>

          {/* Icons for normal user */}
          {isNormalUser && (
            <div className="flex items-center space-x-6 pt-3 md:pt-0 mt-3 md:mt-0 border-t md:border-t-0 border-gray-200 md:border-none">
              <FaHeart
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => navigate("/profile/wishlist")}
              />
              <FaBell
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => navigate("/profile/notifications")}
              />
              <div className="relative">
                <FaUserCircle
                  className="text-blue-600 text-xl cursor-pointer"
                  onClick={() => navigate("/profile")}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

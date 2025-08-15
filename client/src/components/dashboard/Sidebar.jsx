// import { FaHome, FaArrowRight } from "react-icons/fa";
// import { ImUsers } from "react-icons/im";
// import { FaUsers } from "react-icons/fa6";
// import { GiDeliveryDrone } from "react-icons/gi";
// import { RiAuctionFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const itemClasses =
//     "flex items-center gap-2 px-3 py-2 rounded cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-300 hover:text-white transition duration-200";

//   return (
//     <div className="bg-white shadow lg:h-screen lg:w-64 w-full p-4 flex lg:flex-col flex-row items-center justify-between lg:items-start lg:justify-start sticky top-0 z-10">
//       <h2 className="text-xl font-bold mb-4 text-blue-700 lg:block hidden">
//         ADMIN
//       </h2>
//       <nav className="flex flex-col lg:gap-4 gap-2 text-gray-700 lg:w-full w-full lg:flex-col flex-row overflow-x-auto">
//         <Link
//           to="/admin/dashboard"
//           className={`${itemClasses} text-blue-600 font-semibold`}
//         >
//           <FaHome />
//           <span className="hidden lg:inline">Overview</span>
//         </Link>

//         <div className="font-semibold hidden lg:block">SECTION</div>

//         <Link to="/admin/sellers" className={itemClasses}>
//           <ImUsers />
//           <span className="hidden lg:inline">Seller's</span>
//         </Link>

//         <Link to="/admin/customers" className={itemClasses}>
//           <FaUsers />
//           <span className="hidden lg:inline">Customers</span>
//         </Link>

//         <Link to="/admin/live-biddings" className={itemClasses}>
//           <GiDeliveryDrone />
//           <span className="hidden lg:inline">LIVE BIDDING</span>
//         </Link>

//         <Link to="/admin/bidding-history" className={itemClasses}>
//           <RiAuctionFill />
//           <span className="hidden lg:inline">Bidding History</span>
//         </Link>
//       </nav>
//     </div>
//   );
// }

// import { useState } from "react";
// import { FaHome, FaBars, FaTimes } from "react-icons/fa";
// import { ImUsers } from "react-icons/im";
// import { FaUsers } from "react-icons/fa6";
// import { GiDeliveryDrone } from "react-icons/gi";
// import { RiAuctionFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const itemClasses =
//     "flex items-center gap-2 px-3 py-2 rounded cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-300 hover:text-white transition duration-200";

//   return (
//     <>
//       {/* Mobile Navbar Toggle */}
//       <div className="lg:hidden flex items-center justify-between bg-white shadow px-4 py-3 sticky top-0 z-20">
//         <h2 className="text-xl font-bold text-blue-700">ADMIN</h2>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-gray-700 text-2xl focus:outline-none"
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`bg-white shadow lg:h-screen lg:w-64 w-64 p-4 flex flex-col fixed lg:static top-0 left-0 z-30 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 transition-transform duration-300`}
//       >
//         <h2 className="text-xl font-bold mb-4 text-blue-700 hidden lg:block">
//           ADMIN
//         </h2>

//         <nav className="flex flex-col gap-4 text-gray-700 w-full">
//           <Link
//             to="/admin/dashboard"
//             className={`${itemClasses} text-blue-600 font-semibold`}
//             onClick={() => setIsOpen(false)}
//           >
//             <FaHome />
//             <span>Overview</span>
//           </Link>

//           <div className="font-semibold hidden lg:block">SECTION</div>

//           <Link
//             to="/admin/sellers"
//             className={itemClasses}
//             onClick={() => setIsOpen(false)}
//           >
//             <ImUsers />
//             <span>Seller's</span>
//           </Link>

//           <Link
//             to="/admin/customers"
//             className={itemClasses}
//             onClick={() => setIsOpen(false)}
//           >
//             <FaUsers />
//             <span>Customers</span>
//           </Link>

//           <Link
//             to="/admin/live-biddings"
//             className={itemClasses}
//             onClick={() => setIsOpen(false)}
//           >
//             <GiDeliveryDrone />
//             <span>LIVE BIDDING</span>
//           </Link>

//           <Link
//             to="/admin/bidding-history"
//             className={itemClasses}
//             onClick={() => setIsOpen(false)}
//           >
//             <RiAuctionFill />
//             <span>Bidding History</span>
//           </Link>
//         </nav>
//       </div>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-40 lg:hidden z-20"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </>
//   );
// }

// import { FaHome } from "react-icons/fa";
// import { ImUsers } from "react-icons/im";
// import { FaUsers } from "react-icons/fa6";
// import { GiDeliveryDrone } from "react-icons/gi";
// import { RiAuctionFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const itemClasses =
//     "flex items-center justify-center lg:justify-start gap-2 px-3 py-2 rounded cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-300 hover:text-white transition duration-200";

//   return (
//     <div className="bg-white shadow h-screen lg:w-64 w-20 p-4 flex flex-col items-center lg:items-start sticky top-0 z-10">
//       {/* Logo / Title */}
//       <h2 className="text-xl font-bold mb-4 text-blue-700 hidden lg:block">
//         ADMIN
//       </h2>

//       <nav className="flex flex-col gap-4 text-gray-700 w-full">
//         <Link
//           to="/admin/dashboard"
//           className={`${itemClasses} text-blue-600 font-semibold`}
//         >
//           <FaHome size={20} />
//           <span className="hidden lg:inline">Overview</span>
//         </Link>

//         <div className="font-semibold hidden lg:block">SECTION</div>

//         <Link to="/admin/sellers" className={itemClasses}>
//           <ImUsers size={20} />
//           <span className="hidden lg:inline">Seller's</span>
//         </Link>

//         <Link to="/admin/customers" className={itemClasses}>
//           <FaUsers size={20} />
//           <span className="hidden lg:inline">Customers</span>
//         </Link>

//         <Link to="/admin/live-biddings" className={itemClasses}>
//           <GiDeliveryDrone size={20} />
//           <span className="hidden lg:inline">LIVE BIDDING</span>
//         </Link>

//         <Link to="/admin/bidding-history" className={itemClasses}>
//           <RiAuctionFill size={20} />
//           <span className="hidden lg:inline">Bidding History</span>
//         </Link>
//       </nav>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { RiAuctionFill } from "react-icons/ri";

export default function Sidebar() {
  const baseClasses =
    "flex items-center justify-center lg:justify-start gap-2 px-3 py-2 rounded transition duration-200";
  const activeClasses =
    "bg-gradient-to-r from-blue-500 to-blue-300 text-white font-semibold";
  const inactiveClasses =
    "text-gray-700 hover:bg-gradient-to-r from-blue-500 to-blue-300 hover:text-white";

  return (
    <div className="bg-white shadow h-screen lg:w-64 w-20 p-4 flex flex-col items-center lg:items-start sticky top-0 z-10">
      {/* Logo / Title */}
      <h2 className="text-xl font-bold mb-4 text-blue-700 hidden lg:block">
        ADMIN
      </h2>

      <nav className="flex flex-col gap-4 w-full">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaHome size={20} />
          <span className="hidden lg:inline">Overview</span>
        </NavLink>

        <div className="font-semibold hidden lg:block">SECTION</div>

        <NavLink
          to="/admin/sellers"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <ImUsers size={20} />
          <span className="hidden lg:inline">Seller's</span>
        </NavLink>

        <NavLink
          to="/admin/customers"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaUsers size={20} />
          <span className="hidden lg:inline">Customers</span>
        </NavLink>

        <NavLink
          to="/admin/live-biddings"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <GiDeliveryDrone size={20} />
          <span className="hidden lg:inline">LIVE BIDDING</span>
        </NavLink>

        <NavLink
          to="/admin/bidding-history"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <RiAuctionFill size={20} />
          <span className="hidden lg:inline">Bidding History</span>
        </NavLink>
      </nav>
    </div>
  );
}

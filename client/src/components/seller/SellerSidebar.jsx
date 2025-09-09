import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { GiDeliveryDrone } from "react-icons/gi";

export default function SellerSidebar() {
  const baseClasses =
    "flex items-center justify-center lg:justify-start gap-2 px-3 py-2 rounded transition duration-200";
  const activeClasses =
    "bg-gradient-to-r from-blue-500 to-blue-300 text-white font-semibold"; // same as admin
  const inactiveClasses =
    "text-gray-700 hover:bg-gradient-to-r from-blue-500 to-blue-300 hover:text-white"; // same hover

  return (
    <div className="bg-white shadow h-screen lg:w-64 w-20 p-4 flex flex-col items-center lg:items-start sticky top-0 z-10">
      {/* Logo / Title */}
      <h2 className="text-xl font-bold mb-4 text-blue-700 hidden lg:block">
        SELLER
      </h2>

      <nav className="flex flex-col gap-4 w-full">
        <NavLink
          to="/seller/dashboard"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaHome size={20} />
          <span className="hidden lg:inline">Overview</span>
        </NavLink>

        <div className="font-semibold hidden lg:block">PRODUCTS</div>

        <NavLink
          to="/seller/auction/new"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaBoxOpen size={20} />
          <span className="hidden lg:inline">Add Bid Item</span>
        </NavLink>
        <NavLink
          to="/seller/listings"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaBoxOpen size={20} />
          <span className="hidden lg:inline">My Bid Items</span>
        </NavLink>

        <NavLink
          to="/seller/live-biddings"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <GiDeliveryDrone size={20} />
          <span className="hidden lg:inline">Live Bidding</span>
        </NavLink>

        <NavLink
          to="/seller/bidding-history"
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

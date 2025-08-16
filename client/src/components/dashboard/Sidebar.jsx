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

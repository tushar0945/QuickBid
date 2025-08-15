import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Settings() {
  const location = useLocation();

  // Find the base path of settings (e.g., /profile/setting)
  const basePath = location.pathname.split("/").slice(0, 3).join("/");

  const links = [
    { name: "Account", path: `${basePath}/account` },
    { name: "Addresses", path: `${basePath}/addresses` },
    { name: "Payment", path: `${basePath}/payment` },
    // { name: "Emails", path: `${basePath}/emails` },
    { name: "Messages", path: `${basePath}/emails` },
  ];

  return (
    <div className="pt-[80px] min-h-screen md:flex">
      {/* Sidebar */}
      <div className="w-full md:w-[250px] bg-white shadow-md p-4">
        <ul className="space-y-2 text-sm font-medium text-gray-900">
          {links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative block px-4 py-2 rounded hover:bg-gray-100 transition-all duration-200 
                  ${
                    isActive
                      ? "font-semibold text-black bg-white pl-7 before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:bg-blue-600"
                      : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Outlet to render nested section */}
      <div className="flex-1 bg-white px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
}

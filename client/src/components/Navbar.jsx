import { NavLink } from "react-router-dom";
import publicRoutes from "../routes/publicRoutes";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        {publicRoutes
          .filter((route) => route.meta?.showInNav)
          .map((route, index) => (
            <li key={index}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "text-white"
                }
              >
                {route.meta.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;

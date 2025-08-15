import { Navigate } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FilterPage from "../components/navigation/FilterPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
// import ProductDetails from "../components/product/ProductDetails";
import Product from "../pages/Product/Product";

import Logout from "../pages/auth/Logout";
import BecomeSeller from "../pages/seller/BecomeSeller";

const publicRoutes = [
  { path: "/", element: <Home />, meta: { label: "Home", showInNav: true } },
  {
    path: "/about",
    element: <About />,
    meta: { label: "About", showInNav: true },
  },
  {
    path: "/contact",
    element: <Contact />,
    meta: { label: "Contact", showInNav: true },
  },
  { path: "/filter/:category", element: <FilterPage /> },
  { path: "/filter/:category/:id", element: <Product /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  { path: "/logout", element: <Logout /> },
  { path: "/become-seller", element: <BecomeSeller /> },
];

export default publicRoutes;

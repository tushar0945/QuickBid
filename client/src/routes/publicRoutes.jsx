// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

// const publicRoutes = [
//   { path: "/", element: <Home />, meta: { label: "Home", showInNav: true } },
//   {
//     path: "/about",
//     element: <About />,
//     meta: { label: "About", showInNav: true },
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//     meta: { label: "Contact", showInNav: true },
//   },
// ];

// export default publicRoutes;

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
];

export default publicRoutes;

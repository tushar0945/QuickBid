// import SellerDashboard from "../pages/seller/SellerDashboard";
// import SellerListings from "../pages/seller/SellerListings";
// import ItemForm from "../pages/seller/AddAuction";

// const sellerRoutes = [
//   { path: "/seller/dashboard", element: <SellerDashboard /> },
//   { path: "/seller/listings", element: <SellerListings /> },
//   // { path: "/seller/auction/new", element: <AddAuction /> },
//   { path: "/seller/auction/new", element: <ItemForm /> },
// ];

// export default sellerRoutes;

// const sellerRoutes = [
//   { path: "/sell", element: <SellerRoute /> },
//   {
//     path: "/seller",
//     element: <SellerRoute />, // protects all children
//     children: [
//       { path: "dashboard", element: <SellerDashboard /> },
//       { path: "listings", element: <SellerListings /> },
//       { path: "auction/new", element: <ItemForm /> },
//     ],
//   },
// ];
import SellerDashboard from "../components/seller/SellerDashboard";
import SellerListings from "../components/seller/SellerListings";
import ItemForm from "../pages/seller/AddAuction";
import SellerRoute from "../components/auth/SellerRoute";
import SellerLayout from "../pages/seller/SellerLayout"; // make sure this import exists

const sellerRoutes = [
  {
    path: "/seller",
    element: <SellerLayout />,
    children: [
      { path: "dashboard", element: <SellerDashboard /> },
      { path: "listings", element: <SellerListings /> },
      { path: "auction/new", element: <ItemForm /> },
    ],
  },
];

export default sellerRoutes;

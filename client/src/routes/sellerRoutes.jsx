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

import AdminLayout from "../pages/admin/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Sellers from "../pages/admin/DashSellers";
import Customers from "../pages/admin/DashCustomers";
import LiveBidding from "../pages/admin/DashLiveBiddings";
import BiddingHistory from "../pages/admin/DashBiddingHistory";
const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      { path: "sellers", element: <Sellers /> },
      { path: "customers", element: <Customers /> },
      { path: "live-biddings", element: <LiveBidding /> },
      { path: "bidding-history", element: <BiddingHistory /> },
    ],
  },
];

export default adminRoutes;

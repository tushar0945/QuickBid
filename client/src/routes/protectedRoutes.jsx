import { Navigate } from "react-router-dom";

import AuctionDetails from "../pages/AuctionDetails";
import MyBids from "../pages/user/MyBids";
import PaymentPage from "../pages/user/Payment";
import Wishlist from "../pages/user/Wishlist";

import Profile from "../pages/user/Profile";
import Account from "../components/profile/Account";
import Addresses from "../components/profile/addresses";
import Payment from "../components/profile/paymentdetails";
import Emails from "../components/profile/emails";
import Messages from "../components/profile/Notifications";
import ProfileLayout from "../pages/user/ProfileLayout";
import Notifications from "../pages/user/Notifications";

import Settings from "../pages/user/Settings";
import ProfileRedirect from "../components/auth/ProfileRedirect";
import RequireProfileCompletion from "../components/auth/RequireProfileCompletion";

const protectedRoutes = [
  { path: "/auction/:id", element: <AuctionDetails /> },
  { path: "/payment/:auctionId", element: <PaymentPage /> },

  // Smart profile redirect
  { path: "/profile", element: <ProfileRedirect /> },

  // ✅ Standalone Settings (not inside ProfileLayout)
  {
    path: "/profile/setting/*",
    element: <Settings />,
    children: [
      { path: "account", element: <Account /> },
      { path: "addresses", element: <Addresses /> },
      { path: "payment", element: <Payment /> },
      { path: "emails", element: <Emails /> },
    ],
  },

  // ✅ ProfileLayout pages
  {
    path: "/profile/*",
    element: (
      <RequireProfileCompletion>
        <ProfileLayout />
      </RequireProfileCompletion>
    ),
    children: [
      { path: "details", element: <Profile /> },
      { path: "bids", element: <MyBids /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
];

export default protectedRoutes;

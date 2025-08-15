import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/seller/SellerSidebar"; // your sidebar component

export default function SellerLayout() {
  return (
    <div className="flex pt-12">
      <Sidebar /> {/* This will always be visible */}
      <div className="flex-1 p-4">
        <Outlet /> {/* Nested route content will render here */}
      </div>
    </div>
  );
}

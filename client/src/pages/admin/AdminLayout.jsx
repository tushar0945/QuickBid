import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen pt-12">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 space-y-8">
        <Outlet />
      </div>
    </div>
  );
}

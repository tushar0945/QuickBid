import React from "react";

export default function SellerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome, Seller!</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Listings</p>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Live Bids</p>
          <p className="text-2xl font-bold text-gray-800">5</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Sales</p>
          <p className="text-2xl font-bold text-gray-800">8</p>
        </div>
      </div>

      {/* Placeholder for charts or recent activity */}
      <div className="bg-white shadow rounded-lg p-4">
        <p className="text-gray-500">Recent Activity / Analytics</p>
        <div className="h-40 flex items-center justify-center text-gray-300">
          Chart / Table placeholder
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("verification");

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-2">Hello Tushar</h1>
//       <div className="border-b border-gray-200 mb-6"></div>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Side Navigation */}
//         <div className="w-full md:w-64 flex-shrink-0">
//           <div className="space-y-6">
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                 Account
//               </h2>
//               <ul className="space-y-1 ml-2">
//                 <li>
//                   <button
//                     className={`text-left w-full px-3 py-2 rounded ${
//                       activeTab === "addresses"
//                         ? "bg-blue-50 text-blue-600"
//                         : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                     onClick={() => setActiveTab("addresses")}
//                   >
//                     Addresses
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className={`text-left w-full px-3 py-2 rounded ${
//                       activeTab === "payment"
//                         ? "bg-blue-50 text-blue-600"
//                         : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                     onClick={() => setActiveTab("payment")}
//                   >
//                     Payment
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className={`text-left w-full px-3 py-2 rounded ${
//                       activeTab === "verification"
//                         ? "bg-blue-50 text-blue-600"
//                         : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                     onClick={() => setActiveTab("verification")}
//                   >
//                     Verification
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1">
//           {activeTab === "verification" && (
//             <div className="space-y-6">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Verification
//               </h2>

//               {/* Email Verification Card */}
//               <div className="bg-white p-5 rounded-lg border border-gray-200">
//                 <h4 className="font-medium text-gray-800 mb-3">EMAIL</h4>
//                 <p className="text-gray-600">
//                   Your email address has been successfully verified. To activate
//                   your account, your email address needs to be verified.
//                 </p>
//               </div>

//               {/* Add Details Card */}
//               <div className="bg-white p-5 rounded-lg border border-gray-200">
//                 <h4 className="font-medium text-gray-800 mb-2">ADD DETAILS</h4>
//                 <p className="text-gray-600 mb-2">Complete your account</p>
//                 <p className="text-gray-600">
//                   To start bidding, we still need a few more details.
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* You can add other tabs content here */}
//           {activeTab === "addresses" && <div>Addresses content goes here</div>}
//           {activeTab === "payment" && <div>Payment content goes here</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import { Doughnut } from "react-chartjs-2";
import BiddingStatsChart from "./Graph"; // ✅ Correct import

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { FaDollarSign, FaTasks, FaFileAlt, FaThumbsUp } from "react-icons/fa";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function AdminDashboard() {
  const revenueData = {
    labels: ["Direct", "Social", "Referral"],
    datasets: [
      {
        data: [10, 20, 70],
        backgroundColor: ["#3b82f6", "#10b981", "#f43f5e"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 space-y-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            value="$30200"
            label="All Earnings"
            description="10% changes on profit"
            icon={<FaDollarSign className="text-yellow-500" />}
            color="border-yellow-500"
          />
          <StatCard
            value="90k+"
            label="Bid"
            description="Recently Signed up"
            icon={<FaTasks className="text-red-500" />}
            color="border-red-500"
          />
          <StatCard
            value="290+"
            label="New-Users"
            description="Recently-Signed Up"
            icon={<FaFileAlt className="text-green-500" />}
            color="border-green-500"
          />
          <StatCard
            value="500"
            label="Downloads"
            description="1k download in App store"
            icon={<FaThumbsUp className="text-blue-500" />}
            color="border-blue-500"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md shadow h-[300px]">
            <SalesChart />
          </div>
          <div className="bg-white p-4 rounded-md shadow h-[300px]">
            <BiddingStatsChart /> {/* ✅ Chart added below SalesChart */}
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
            Revenue Distribution
          </h2>
          <div className="w-full h-[250px] sm:h-[300px] max-w-[300px] mx-auto">
            <Doughnut data={revenueData} options={chartOptions} />
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Direct</span>
              <span className="font-medium text-gray-800">80%</span>
            </div>
            <div className="flex justify-between">
              <span>Social</span>
              <span className="font-medium text-gray-800">50%</span>
            </div>
            <div className="flex justify-between">
              <span>Referral</span>
              <span className="font-medium text-gray-800">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

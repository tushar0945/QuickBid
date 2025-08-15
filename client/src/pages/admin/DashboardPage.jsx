import React from "react";
import StatCard from "../../components/dashboard/StateCard";
import SalesChart from "../../components/dashboard/SalesChart";
import BiddingStatsChart from "../../components/dashboard/BiddingStatsChart";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaDollarSign, FaTasks, FaFileAlt, FaThumbsUp } from "react-icons/fa";

// Chart.js setup
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardPage() {
  const revenueData = {
    labels: ["Direct", "Social", "Referral"],
    datasets: [
      {
        data: [80, 50, 20],
        backgroundColor: ["#3b82f6", "#10b981", "#f43f5e"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = { responsive: true, maintainAspectRatio: false };

  return (
    <>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          value="$30,200"
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
          label="New Users"
          description="Recently Signed Up"
          icon={<FaFileAlt className="text-green-500" />}
          color="border-green-500"
        />
        <StatCard
          value="500"
          label="Downloads"
          description="1k download in App Store"
          icon={<FaThumbsUp className="text-blue-500" />}
          color="border-blue-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md shadow min-h-[300px]">
          <SalesChart />
        </div>
        <div className="bg-white p-4 rounded-md shadow min-h-[300px]">
          <BiddingStatsChart />
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
    </>
  );
}

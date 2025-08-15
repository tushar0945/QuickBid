import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const BiddingStatsChart = () => {
  const data = {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Electronics",
        data: [80, 90, 100, 120],
        backgroundColor: "#003f5c",
        stack: "Stack 0",
      },
      {
        label: "Fashion",
        data: [60, 75, 85, 95],
        backgroundColor: "#2f4b7c",
        stack: "Stack 0",
      },
      {
        label: "Home & Living",
        data: [40, 55, 65, 70],
        backgroundColor: "#665191",
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // ✅ removed 'as const'
      },
      title: {
        display: true,
        text: "Total Bids by Category Over Years",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return value + "B"; // ✅ removed `: number`
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md min-h-[400px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BiddingStatsChart;

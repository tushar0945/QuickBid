import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const SalesChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        borderColor: "#3b82f6",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // ✅ Fill parent height
  };

  return (
    <div className="bg-white p-4 rounded-md shadow w-full h-full">
      <div className="text-sm font-semibold mb-2">Sales Per Day</div>
      <div className="h-[250px]">
        {" "}
        {/* You can match this to your min-h */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ResultBarChart({ data }) {
  const chartData = {
    labels: data?.map((r) => r.subject || "Exam"),
    datasets: [
      {
        label: "Marks",
        data: data?.map((r) => r.marks),
        backgroundColor: "#6366f1", // modern indigo
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#111827",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return (
    <div style={{ height: 320 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
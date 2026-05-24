import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// ✅ MUST register (this is critical)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function ResultLineChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "gray", padding: 20 }}>
        No data available for trend chart
      </div>
    );
  }

  const chartData = {
    labels: data.map((r) => r.subject || "Exam"),
    datasets: [
      {
        label: "Marks Trend",
        data: data.map((r) => r.marks),
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.15)",
        tension: 0.4, // smooth curve
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "#6366f1",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#fff",
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
    <div style={{ height: 320, paddingTop: 10 }}>
      <Line data={chartData} options={options} />
    </div>
  );
}
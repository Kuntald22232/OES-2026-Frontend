import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PassFailPieChart({ data }) {
  const chartData = {
    labels: ["Pass", "Fail"],
    datasets: [
      {
        data: [data?.pass || 0, data?.fail || 0],
        backgroundColor: ["#22c55e", "#ef4444"], // green/red modern
        borderColor: "#ffffff",
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <div
      style={{
        height: 320,
        padding: "10px",
      }}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
}
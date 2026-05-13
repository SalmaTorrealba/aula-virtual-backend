"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ProgresoChart() {
  const data = {
    labels: ["Curso 1", "Curso 2", "Curso 3", "Curso 4", "Curso 5"],
    datasets: [
      {
        label: "Progreso (%)",
        data: [80, 65, 40, 90, 55],
        backgroundColor: "#ff7a00",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  };

  return <Bar data={data} options={options} />;
}

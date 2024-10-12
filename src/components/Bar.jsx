'use client'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarGraph = ({data}) => {
    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Hours Spent",
          },
        },
        x: {
          title: {
            display: true,
            text: "Activities",
          },
        },
      },
    };
  return (
    <section className="w-full">
      <Bar options={options} data={data} />
    </section>
  );
};
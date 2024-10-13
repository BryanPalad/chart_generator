'use client'
import { Box } from "@mui/material";
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
        },
        x: {
          title: {
            display: true,
            text: "Activities",
            font: {
              weight: 'bold',
            },
          },
          ticks: {
            font: {
              weight: 'bold',
            },
          },
        },
      },
    };
  return (
    <section className="flex flex-col w-full">
      <Box className="flex justify-center items-center border border-slate-300 py-2">
        <h4 className="text-[18px] font-bold text-[#fc031c]">Time Spent Per Activity</h4>
      </Box>
      <Bar options={options} data={data} />
    </section>
  );
};
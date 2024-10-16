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

export const BarGraph = ({data, filter}) => {
    const options = {
      plugins: {
        legend: {
          display: false
        }
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          title: {
            display: true,
            text: "Activity Data",
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

    const stackedOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "top", // Position of the legend
        },
        title: {
          display: true,
          text:  "Activity Data", // Title of the chart
        },
      },
      scales: {
        y: {
          stacked: true, // Enable stacking on the y-axis
        },
        x: {
          stacked: true, // Enable stacking on the x-axis
        },
      },
    };

  return (
    <section className="flex flex-col w-full">
      <Box className="flex justify-center items-center border border-slate-300 py-2">
        <h4 className="text-[18px] font-bold text-[#fc031c]">Documents Generated</h4>
      </Box>
      <Bar options={filter === 'Today' ? options : stackedOptions } data={data || []} />
    </section>
  );
};
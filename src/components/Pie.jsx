'use client';
import { Pie } from "react-chartjs-2"
import { Chart as ChartJs, Tooltip, Legend, ArcElement} from "chart.js";
import {pieChartData} from "../utils/constants/MockData";

ChartJs.register(Tooltip, Legend, ArcElement)

export const PieGraph = () => {
    const options = {
        plugins: {
            legend: {
                position: 'bottom', // Position the legend at the bottom
                align: 'center',    // Align the legend to center
                labels: {
                    boxHeight: 10, // Customize the height of the legend box
                    boxWidth: 40,   // Customize the width of the legend box
                    padding: 15     // Padding around legend labels
                }
            }
        }
    };
    return (
        <section className="w-full h-[500px] flex items-center justify-center">
          <Pie options={options} data={pieChartData} />
        </section>
      );
}
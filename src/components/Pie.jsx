'use client';
import React from 'react';
import { Pie } from "react-chartjs-2"
import { Chart as ChartJs, Tooltip, Legend, ArcElement} from "chart.js";

ChartJs.register(Tooltip, Legend, ArcElement)

export const PieGraph = ({data}) => {
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

    console.log(data.datasets[0].data);
    return (
      <React.Fragment>
        <section className="w-full h-[500px] flex items-center justify-center">
          {data.datasets[0].data <= 0 ? (
            <div>
              <h4>No Available Data</h4>{" "}
            </div>
          ) : (
              <Pie options={options} data={data} />
          )}
        </section>
      </React.Fragment>
    );
}
'use client';
import React from 'react';
import { Pie } from "react-chartjs-2"
import { Chart as ChartJs, Tooltip, Legend, ArcElement} from "chart.js";
import { Box } from '@mui/material';
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
        <section className="w-full flex flex-col items-center">
        <Box className="flex justify-center items-center border border-slate-300 py-2 w-full">
          <h4 className="text-[18px] font-bold text-[#fc031c]">Time Spent per Activity</h4>
        </Box>
        <Box className="flex justify-center items-center">
          {data.datasets[0].data <= 0 ? ( 
            <div>
              <h4 className='text-center mt-4'>No Available Data</h4>{" "}
            </div>
          ) : (
            <Box className="mt-8">
              <Pie options={options} data={data || []} style={{width: '450px'}}/>
            </Box>
          )}
          </Box>
        </section>
      </React.Fragment>
    );
}
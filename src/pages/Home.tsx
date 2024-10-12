"use client";
import Image from "next/image";
import { BarGraph } from "../components/Bar";
import { PieGraph } from "../components/Pie";
import { useEffect, useState } from "react";
import { CustomTextField } from "../components/CustomTextField";
import { EditableTable } from "../components/EditableTable";
import dayjs from 'dayjs';

interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: (string | number)[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface PieChartData {
  labels: string[];
  datasets: {
    label: string;
    data: (string | number)[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
}

export default function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      startTime: dayjs().hour(0).minute(0).second(0),
      endTime: dayjs().hour(0).minute(0).second(0),
      totalTime: '',
      activity: '',
      deliverable: '',
      docsGenerated: 0,
      description: '',
      remarks: '',
    },
  ]);

  const [barChartData, setBarChartData] = useState<BarChartData>({
    labels: [],
    datasets: [{
      label: 'Total Time Spent (hrs)',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',   // Red
        'rgba(54, 162, 235, 0.9)',   // Blue
        'rgba(255, 206, 86, 0.9)',   // Yellow
        'rgba(75, 192, 192, 0.9)',   // Teal
        'rgba(153, 102, 255, 0.9)',  // Purple
        'rgba(255, 159, 64, 0.9)',   // Orange
        'rgba(100, 181, 246, 0.9)',  // Light Blue
        'rgba(244, 67, 54, 0.9)',    // Deep Red
        'rgba(76, 175, 80, 0.9)',    // Green
        'rgba(255, 87, 34, 0.9)',    // Deep Orange
        'rgba(33, 150, 243, 0.9)',   // Indigo Blue
        'rgba(121, 85, 72, 0.9)',    // Brown
        'rgba(96, 125, 139, 0.9)',   // Blue Grey
        'rgba(0, 188, 212, 0.9)',    // Cyan
        'rgba(233, 30, 99, 0.9)',    // Pink
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',     // Red
        'rgba(54, 162, 235, 1)',     // Blue
        'rgba(255, 206, 86, 1)',     // Yellow
        'rgba(75, 192, 192, 1)',     // Teal
        'rgba(153, 102, 255, 1)',    // Purple
        'rgba(255, 159, 64, 1)',     // Orange
        'rgba(100, 181, 246, 1)',    // Light Blue
        'rgba(244, 67, 54, 1)',      // Deep Red
        'rgba(76, 175, 80, 1)',      // Green
        'rgba(255, 87, 34, 1)',      // Deep Orange
        'rgba(33, 150, 243, 1)',     // Indigo Blue
        'rgba(121, 85, 72, 1)',      // Brown
        'rgba(96, 125, 139, 1)',     // Blue Grey
        'rgba(0, 188, 212, 1)',      // Cyan
        'rgba(233, 30, 99, 1)',      // Pink
      ],
      borderWidth: 1,
    }],
  });

  const [pieChartData, setPieChartData] = useState<PieChartData>({
    labels: [],
    datasets: [{
      label: 'Total Time Spent (hrs)',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',   // Red
        'rgba(54, 162, 235, 0.9)',   // Blue
        'rgba(255, 206, 86, 0.9)',   // Yellow
        'rgba(75, 192, 192, 0.9)',   // Teal
        'rgba(153, 102, 255, 0.9)',  // Purple
        'rgba(255, 159, 64, 0.9)',   // Orange
        'rgba(100, 181, 246, 0.9)',  // Light Blue
        'rgba(244, 67, 54, 0.9)',    // Deep Red
        'rgba(76, 175, 80, 0.9)',    // Green
        'rgba(255, 87, 34, 0.9)',    // Deep Orange
        'rgba(33, 150, 243, 0.9)',   // Indigo Blue
        'rgba(121, 85, 72, 0.9)',    // Brown
        'rgba(96, 125, 139, 0.9)',   // Blue Grey
        'rgba(0, 188, 212, 0.9)',    // Cyan
        'rgba(233, 30, 99, 0.9)',    // Pink
      ],
      hoverOffset: 4,
    }],
  });

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;

      const fullDateAndTimeToday = `${month} ${day}, ${year} ${hours12}:${minutes} ${ampm}`;
      setCurrentTime(fullDateAndTimeToday);
    };

    // Update time immediately and every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Update the barChartData and pieChartData whenever data changes
  useEffect(() => {
    const newLabels = data.map(item => item.activity).filter(activity => activity); // Get non-empty activities
    const newData = data.map(item => item.totalTime ? Number(item.totalTime) : 0); // Convert totalTime to number for graph

    setBarChartData(prevData => ({
      labels: newLabels, // Update the labels for the bar chart
      datasets: [{
        ...prevData.datasets[0],
        data: newData, // Update the data for the bar chart
      }],
    }));

    setPieChartData(prevData => ({
      labels: newLabels, // Update the labels for the pie chart
      datasets: [{
        ...prevData.datasets[0],
        data: newData, // Update the data for the pie chart
      }],
    }));
  }, [data]);

  return (
    <section className="flex flex-col gap-2 w-full h-full py-2 px-12 overflow-hidden">
      <div className="flex items-center justify-between text-center w-full bg-red">
        <Image src="/images/mega.jfif" alt="logo" width={100} height={100} />
        <h4 className="text-center text-[18px]">OVERALL ACTIVITY TRACKER</h4>
        <h4 className="font-mono font-normal text-[16px]">{currentTime}</h4>
      </div>
      
      <div className="flex w-full justify-center items-center">
        <CustomTextField label="Name" />
        <CustomTextField label="Position" />
      </div>

      <div className="flex gap-4 mt-2">
        <BarGraph data={barChartData} />
        <PieGraph data={pieChartData} />
      </div>

      <EditableTable
        data={data}
        setData={setData}
      />
    </section>
  );
}

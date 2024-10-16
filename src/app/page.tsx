"use client";
import Image from "next/image";
import { BarGraph } from "../components/Bar";
import { PieGraph } from "../components/Pie";
import { useEffect, useState } from "react";
import { CustomTextField } from "../components/CustomTextField";
import { EditableTable } from "../components/EditableTable";
import dayjs from 'dayjs';
import { BasicDatePicker } from "../components/BasicDatePicker";
import { filterByData, monthlyBarChartData, activityData } from "../context/utils/constants/MockData"
import BasicSelect from "@/components/SelectField";
import { useExecuteToast } from "../context/hooks/useExecuteToast";
import { BarChartData, PieChartData } from "../types/types";


interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface DailyBarChartData {
  labels: string | undefined; // Each entry has a labels property that is a string (e.g., "October 07")
  datasets: Dataset[]; // Each entry has a datasets property that is an array of Dataset
}

export default function Home() {

  useEffect(() => {
    const existingDailyBarChartData = localStorage.getItem('dailyBarChartData');
    const existingDBCD = existingDailyBarChartData ? JSON.parse(existingDailyBarChartData) : [];

    setDailyBarChartData(existingDBCD);
  },[]);

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

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');

  const { notify, ToastContainer } = useExecuteToast();

  const [barChartData, setBarChartData] = useState<BarChartData>({
    labels: [], // activity
    datasets: [{
      data: [], // documents generated
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    }],
  });

  const [pieChartData, setPieChartData] = useState<PieChartData>({
    labels: [], // activity
    datasets: [{
      label: 'Total Time Spent (hrs)',
      data: [], // time spent
      backgroundColor: [],
      hoverOffset: 4,
    }],
  });

  const [dailyBarChartData, setDailyBarChartData] = useState<DailyBarChartData[]>([
    {
      labels: '', // date
      datasets: [
        {
          label: '', // activity
          data: [], // documents generated
          backgroundColor: '',  
        },
      ],
    },
  ]);


  const transformDataForChart = (dailyBarChartData: DailyBarChartData[]) => {
    const labels = dailyBarChartData.map((entry) => entry.labels);
    const datasetsMap = new Map<string, { label: string; data: number[]; backgroundColor: string }>();
  
    // Consolidate datasets for each activity type across all dates
    dailyBarChartData.forEach((entry) => {
      entry.datasets.forEach((dataset) => {
        if (!datasetsMap.has(dataset.label)) {
          datasetsMap.set(dataset.label, {
            label: dataset.label,
            data: Array(dailyBarChartData.length).fill(0), // initialize with zeros for each date
            backgroundColor: dataset.backgroundColor,
          });
        }
        const index = dailyBarChartData.indexOf(entry);
        datasetsMap.get(dataset.label)!.data[index] = dataset.data[0]; // Use non-null assertion operator
      });
    });
  
    return {
      labels,
      datasets: Array.from(datasetsMap.values()),
    };
  };
  
  const sampleDataForDailyBarChart = transformDataForChart(dailyBarChartData);

  const [currentTime, setCurrentTime] = useState('');
  const [filter, setFilter] = useState('Today');

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

  useEffect(() => {
    // Aggregate data by activity
    const activityDataMap: { [key: string]: { timeSpent: number; docsGenerated: number } } = data.reduce(
      (acc, item) => {
        if (item.activity) {
          const timeSpent = item.totalTime ? Number(item.totalTime) : 0;
          const docsGenerated = item.docsGenerated ? Number(item.docsGenerated) : 0;
  
          if (acc[item.activity]) {
            // Add to existing activity data
            acc[item.activity].timeSpent += timeSpent;
            acc[item.activity].docsGenerated += docsGenerated;
          } else {
            // Initialize new activity data
            acc[item.activity] = {
              timeSpent,
              docsGenerated,
            };
          }
        }
        return acc;
      },
      {} as { [key: string]: { timeSpent: number; docsGenerated: number } }
    );
  
    // Extract labels (unique activities), total time spent, and generated documents
    const newLabels = Object.keys(activityDataMap);
    const newTimeSpentData = newLabels.map((activity) => activityDataMap[activity].timeSpent);
    const newDocsGeneratedData = newLabels.map((activity) => activityDataMap[activity].docsGenerated);
  
    // Dynamically generate backgroundColor and borderColor based on activityData
    const backgroundColor = newLabels.map((activity) => {
      const activityInfo = activityData.find((a) => a.value === activity);
      return activityInfo ? activityInfo.color : 'rgba(0,0,0,0.1)'; // default to a light grey if not found
    });
  
    const borderColor = newLabels.map((activity) => {
      const activityInfo = activityData.find((a) => a.value === activity);
      return activityInfo ? activityInfo.color.replace('0.9', '1') : 'rgba(0,0,0,0.2)'; // default to grey with 1 opacity
    });
  
    // Update bar chart data with total time spent
    setBarChartData((prevData) => ({
      labels: newLabels, // Update the labels for the bar chart
      datasets: [
        {
          ...prevData.datasets[0],
          data: newDocsGeneratedData, // Update the data for the bar chart
          backgroundColor,       // Set dynamic background colors
          borderColor,           // Set dynamic border colors
        },
      ],
    }));
  
    // Update pie chart data with docs generated
    setPieChartData((prevData) => ({
      labels: newLabels, // Update the labels for the pie chart
      datasets: [
        {
          ...prevData.datasets[0],
          data: newTimeSpentData, // Update the data for the pie chart
          backgroundColor,           // Set dynamic background colors for the pie chart
        },
      ],
    }));
  }, [data]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const handleSaveData = () => {
    const formattedData = data.map(item => ({
        ...item,
        startTime: item.startTime.format(),
        endTime: item.endTime.format(),
        date: selectedDate ? selectedDate.format('MMMM D') : '',
        name,
        position
    }));

    const newDailyBarChartEntry: DailyBarChartData = {
        labels: selectedDate ? selectedDate.format('MMMM D') : '',
        datasets: barChartData.labels.map((activityLabel, index) => ({
            label: activityLabel || '',
            data: [Number(barChartData.datasets[0].data[index]) || 0],
            backgroundColor: barChartData.datasets[0].backgroundColor[index] || '',
        })),
    };

    // Retrieve existing data from localStorage with a null check
    const existingDataString = localStorage.getItem('dailyBarChartData');
    const existingData = existingDataString ? JSON.parse(existingDataString) : []; // If null, use an empty array

    // Merge new data with existing data
    const updatedData = [...existingData, newDailyBarChartEntry];

    // Save the updated data back to localStorage
    localStorage.setItem('dailyBarChartData', JSON.stringify(updatedData));
    localStorage.setItem('ActivityData', JSON.stringify(formattedData));

    // Update state to reflect new chart data
    setDailyBarChartData(updatedData);

    // Notify the user
    notify('Activity has been saved...');
    window.location.reload();
};


  return (
    <section className="flex flex-col gap-2 w-full h-full py-2 px-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between text-center w-full bg-red">
        <Image src="/images/mega.jfif" alt="logo" width={100} height={100} />
        <h4 className="text-center text-[16px] lg:text-[18px]">
          OVERALL ACTIVITY TRACKER
        </h4>
        <h4 className="font-mono font-normal text-[14px] lg:text-[16px]">
          {currentTime}
        </h4>
      </div>
      <div className="w-[40px]">
        <BasicSelect
          options={filterByData}
          label="Filter by:"
          value={filter}
          onChange={(value: string) => handleFilterChange(value)}
        />
      </div>

      <div className="flex flex-col gap-2 lg:flex-row mt-2">
        <BarGraph
          data={
            filter === "Today"
              ? barChartData
              : filter === "Daily"
              ? sampleDataForDailyBarChart
              : filter === "Monthly"
              ? monthlyBarChartData
              : barChartData
          }
          filter={filter}
        />
        <PieGraph data={pieChartData} />
      </div>

      <hr />

      <h4 className="text-center text-black text-[18px] mt-4 mb-2">
        Activity Breakdown
      </h4>
      <ToastContainer />
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <CustomTextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomTextField
            label="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <div className="mt-[-10px]">
            <BasicDatePicker
              label="Activity Date"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
        </div>
        <EditableTable
          data={data}
          setData={setData}
          saveData={handleSaveData}
        />
      </div>
    </section>
  );
}

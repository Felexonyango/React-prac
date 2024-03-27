import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [options] = useState({
    chart: {
      id: "line-chart",
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      events: {
        selection: false,
      },
      background: "#fff",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      title: {
        text: "Days",
      },
    },
    yaxis: {
      title: {
        text: "Mileage (Km)",
      },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
      {
        breakpoint: 9999,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  });

  const [series] = useState([
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div className="">
      <h6 className="text-left  font-bold text-blue-800">Fleet Mileage</h6>
      <div className="flex items-center justify-end mb-2">
        <div className="relative">
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <span className="mx-2 text-gray-500">to</span>
        <div className="relative">
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <Chart options={options} series={series} type="area" />
      <button className="bg-blue-950 text-white px-2 py-1 rounded-md float-right space-x-1">
        <div className="flex flex-row items-center">
          <span className="text-sm">Movement</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M13.77 10.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 11H4.75a.75.75 0 0 1 0-1.5H11.44l-2.98-2.97a.75.75 0 0 1 1.06-1.06l4.25 4.25z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default LineChart;

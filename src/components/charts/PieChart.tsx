import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { pieChartData } from "./data";

ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "This is the user growth chart gained by using social sphere",
      },
    },
  };
  return (
    <div className="w-[400px] h-[400px]">
      <Pie data={pieChartData} options={options} />
    </div>
  );
};

export default PieChart;

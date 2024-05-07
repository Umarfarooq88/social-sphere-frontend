import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineChartData } from "./data";
import { cn } from "@/lib/utils/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineGraph = ({ className }: { className?: string }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Overall Analytics",
      },
    },
  };
  return (
    <Line
      data={lineChartData}
      options={options}
      className={cn("w-full", className)}
    />
  );
};

export default LineGraph;

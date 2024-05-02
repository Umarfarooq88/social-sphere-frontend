const pieChartData = {
    labels: ["Youtube", "LinkedIn", "Twitter", "Facebook", "Instagram"],
    datasets: [
      {
        label: "Growth",
        data: [3000, 5000, 6000, 6500, 1500],
        borderColor: ["red", "blue", "green", "yellow", "purple"],
        backgroundColor: ["red", "blue", "green", "yellow", "purple"],
      },
    ],
    hoverOffset:4
};
const barChartData = {
    labels: ["Youtube", "LinkedIn", "Twitter", "Facebook", "Instagram"],
    datasets: [
      {
        label: "Growth",
        data: [3000, 5000, 6000, 6500, 1500],
        borderColor: ["red", "blue", "green", "yellow", "purple"],
        backgroundColor: ["red", "blue", "green", "yellow", "purple"],
      },
    ],
  };

const lineChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Views",
        data: [3000, 5000, 6000, 6500, 1500, 2000, 3000, 7000],
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: "Clicks",
        data: [1500, 2500, 2600, 650, 1500, 2000, 3000, 1200],
        borderColor: "rgba(75, 192, 192, 192)",
      },
      {
        label: "Sales",
        data: [3000, 5000, 6000, 6500, 1500, 200, 2400, 6500],
        borderColor: "rgba(0, 192, 192, 0)",
      },
    ],
};

export { lineChartData, barChartData, pieChartData };
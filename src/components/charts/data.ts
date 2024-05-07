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
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    datasets: [
      {
        label: "Views",
        data: [0, 2, 5, 7, 16, 20, 30, 35],
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: "Likes",
        data: [0, 5, 11, 19, 24, 27, 33, 40],
        borderColor: "rgba(75, 192, 192, 192)",
      },
      {
        label: "Impressions",
        data: [0, 9, 12, 15, 18, 25, 30, 33],
        borderColor: "rgba(0, 192, 65, 1)",
      },
    ],
};

export { lineChartData, barChartData, pieChartData };
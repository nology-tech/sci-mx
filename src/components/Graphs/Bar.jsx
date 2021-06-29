import { Bar } from "react-chartjs-2";
import React from "react";


const BarChart = () => {
  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Your weekly number of Workouts",
        data: [22, 19, 3, 5, 2, 3, 6],
        backgroundColor: ["#f05224", "#00263e", "#a7a9ac", "#f05224", "#00263e", "#a7a9ac", "#f05224", "#f05224"],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;

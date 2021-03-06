import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";

const BarChart = () => {
  const workoutContext = useContext(WorkoutContext);

  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Your weekly number of Workouts",
        data: workoutContext.weeksGraphData,
        backgroundColor: [
          "rgb(240, 82, 36)",
          "rgb(0, 38, 62)",
          "rgb(167, 169, 172)",
          "rgb(240, 82, 36)",
          "rgb(0, 38, 62)",
          "rgb(167, 169, 172",
          "rgb(240, 82, 36",
        ],
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
    maintainAspectRatio: false,
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;

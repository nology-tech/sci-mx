import { Bar } from "react-chartjs-2";
import React, { useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";

const BarChart = () => {
  const workoutContext = useContext(WorkoutContext);

  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Your weekly number of Workouts",
        data: [
          workoutContext.workoutData.workoutArray[0].workoutsCompleted,
          workoutContext.workoutData.workoutArray[1].workoutsCompleted,
          workoutContext.workoutData.workoutArray[2].workoutsCompleted,
          0,
          0,
          0,
          workoutContext.workoutData.workoutArray[0].workoutsCompleted,
        ],
        backgroundColor: [
          "#f05224",
          "#00263e",
          "#a7a9ac",
          "#f05224",
          "#00263e",
          "#a7a9ac",
          "#f05224",
          "#f05224",
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
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;

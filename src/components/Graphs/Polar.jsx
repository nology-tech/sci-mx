import React, { useContext } from "react";
import { PolarArea } from "react-chartjs-2";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";

const Polar = () => {
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
          workoutContext.workoutData.workoutArray[3].workoutsCompleted,
          workoutContext.workoutData.workoutArray[4].workoutsCompleted,
          workoutContext.workoutData.workoutArray[5].workoutsCompleted,
          workoutContext.workoutData.workoutArray[6].workoutsCompleted,
        ],
        backgroundColor: [
          "rgb(240, 82, 36)",
          "rgb(0, 38, 62)",
          "rgb(167, 169, 172)",
          "rgb(240, 82, 36)",
          "rgb(0, 38, 62)",
          "rgb(167, 169, 172",
          "rgb(0, 38, 62)",
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
    title: { display: false },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <>
      <PolarArea data={data} options={options} />
    </>
  );
};

export default Polar;

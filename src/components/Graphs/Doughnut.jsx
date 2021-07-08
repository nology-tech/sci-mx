import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";
const DoughnutChart = () => {
  const workoutContext = useContext(WorkoutContext);
  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Your weekly number of Workouts",
        data: workoutContext.weeksGraphData,
        borderColor: [
          "rgba(240, 82, 36, 0.2)",
          "rgba(0, 38, 62, 0.2)",
          "rgba(167, 169, 172, 0.2)",
          "rgba(240, 82, 36, 0.2)",
          "rgba(0, 38, 62, 0.2)",
          "rgba(167, 169, 172, 0.2)",
          "rgba(240, 82, 36, 0.2)",
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
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: { display: false },
    legend: { display: false },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};
export default DoughnutChart;

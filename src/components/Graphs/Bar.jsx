import { Bar } from "react-chartjs-2";
import React from "react";
import "../../assets/styles/base.scss";

const BarChart = (props) => {
  const { heartRateData } = props;

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
        data: [22, 19, 3, 5, 2, 3, 6],
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
      <div className="header">
        <h1 className="title">Vertical Bar Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;

import React, { useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
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
      type: "line",
      label: "Heart Rate",
      borderColor: "rgb(240, 82, 36)",
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "bar",
      label: "Calories Burnt",
      backgroundColor: "rgb(0, 38, 62)",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: "rgb(0, 38, 62)",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Workout Minutes",
      backgroundColor: "rgb(167, 169, 172)",
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

const options = {
  maintainAspectRatio: false,
};

const data = genData();

const ClickEvents = () => {
  const [clickedDataset, setClickedDataset] = useState("");
  const [clickedElement, setClickedElement] = useState("");
  const [clickedElements, setClickedElements] = useState("");

  const getDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;
    setClickedDataset(data.datasets[datasetIndex].label);
  };

  const getElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    setClickedElement(
      `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
    );
  };

  const getElementsAtEvent = (elements) => {
    if (!elements.length) return;

    setClickedElements(elements.length);
  };
  const workoutContext = useContext(WorkoutContext);

  return (
    <>
      <div className="header">
        <h1 className="title">Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/ClickEvents.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar
        data={data}
        options={options}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
        getElementsAtEvent={getElementsAtEvent}
      />
      <div className="text-center">
        <p>{clickedElement}</p>
        <p>{clickedDataset}</p>
        <p>{clickedElements}</p>
      </div>
    </>
  );
};

export default ClickEvents;

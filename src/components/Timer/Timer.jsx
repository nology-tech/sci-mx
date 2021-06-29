import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  // const [lap, setLap] = useState([]);

  // const lapsContainer = document.querySelector(".lapContainer");
  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const timerTracker = [minutes, seconds];
  const lapMarkUp = () => {
    let lapCount = 1;
    return {
      __html: `<ul><li>Lap ${lapCount++} ${minutes} : ${seconds} </li></ul>`,
    };
  };
  return (
    <section
      className={styles.timer}
      onClick={() => {
        setStart(true);
      }}
      onDoubleClick={() => {
        setStart(false);

        timerTracker.push({ mins: minutes, secs: seconds });
        console.log(timerTracker);
      }}
    >
      <div>
        <div>
          {minutes}:{seconds}
        </div>
      </div>
      <button
        onClick={() => {
          setTime(0);
          setStart(true);
        }}
      >
        Reset
      </button>
      <div className="lapContainer" dangerouslySetInnerHTML={lapMarkUp()} />
      {/* <div>
        {timerTracker.map((times) => {
          return <div dangerouslySetInnerHTML={{ __html: times }} />;
        })}
      </div> */}
    </section>
  );
};

export default Timer;

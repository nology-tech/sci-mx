import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [rounds, setRounds] = useState([]);

  // const lapsContainer = document.querySelector(".lapContainer");
  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

  const lapMarkUp = () => {
    let lapCount = 1;
    return {
      __html: `<ul><li>Lap ${lapCount++} ${minutes} : ${seconds} </li></ul>`,
    };
  };
  return (
    <section className={styles.timer}>
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
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        START
      </button>
      <button
        onClick={() => {
          setStart(false);
          const newState = [...rounds, { mins: minutes, secs: seconds, round: rounds.length + 1 }];
          setRounds(newState);
          console.log(rounds);
        }}
      >
        STOP
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

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
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

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
          const newState = [
            ...rounds,
            { mins: minutes, secs: seconds, round: rounds.length + 1 },
          ];
          setRounds(newState);
          console.log(rounds);
        }}
      >
        STOP
      </button>

      {rounds.map((round, index) => (
        <div key={index++}>
          <p>Round {round.round}: </p>
          <p>
            {round.mins}: {round.secs}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Timer;

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
      <div className={styles.clockcontainer}>
        <div className={styles.time}>
          {minutes}:{seconds}
        </div>

        <button
          onClick={() => {
            setTime(0);
            setStart(true);
          }}
        >
          RESET
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

        <div>
          <svg
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            fill="grey"
          >
            <svg viewBox="0 0 10 10" x="200" width="100">
              <circle cx="5" cy="5" r="4" />
            </svg>
          </svg>
        </div>
      </div>
      <div className={styles.roundcontainer}>
        {rounds.map((round, index) => (
          <div className={styles.laps} key={index++}>
            <p>Round {round.round}: </p>
            <p>
              {round.mins}: {round.secs}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timer;

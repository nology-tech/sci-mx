import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [rounds, setRounds] = useState([]);

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
          <div className={styles.basetimer}>
          <svg height="110" width="110">
          <circle 
            stroke="#ffffff"
            strokeWidth="10"
            r="47"
            cx="55"
            cy="55"
            />
          <circle 
            stroke="#00263e"
            strokeDashoffset={-((seconds / 60) * 47 * 2 * Math.PI) + 47 * 2 * Math.PI}
            strokeDasharray={47 * 2 * Math.PI}
            strokeWidth="5"
            fill="#f05224"
            r="47"
            cx="55"
            cy="55"
          />
        </svg>
           
            <span className={styles.basetimerlabel}>
              {minutes}:{seconds}
            </span>
           
          </div>
         
        </div>
      </div>
      <div className={styles.buttoncontainer}>
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
            setTime(0);
          }}
        >
          STOP
        </button>
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

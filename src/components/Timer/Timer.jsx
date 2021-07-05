import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";
import { wait } from "@testing-library/react";
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
  const handleTimerStart = () => {
    if (!start) {
      setStart(true);
    }
  };
  const handleTimerStop = () => {
    if (start) {
      setStart(false);
      const newState = [
        ...rounds,
        { mins: minutes, secs: seconds, round: rounds.length + 1 },
      ];
      if (rounds.length >= 3) {
        alert("Well done! You Have Completed The Workout ");
      }
      setRounds(newState);
      setTime(0);
    }
  };
  const handleTimerReset = () => {
    setTime(0);
    setStart(true);
  };
  let waitingClick = null;
  let lastClick = 0;
  return (
    <section className={styles.timer}>
      <div className={styles.parentcontainer}>
        <div
          onClick={(e) => {
            if (lastClick && e.timeStamp - lastClick < 250 && waitingClick) {
              lastClick = 0;
              clearTimeout(waitingClick);
              console.log("Do the steps to respond double click");
              handleTimerStart();
            } else {
              lastClick = e.timeStamp;
              waitingClick = setTimeout(() => {
                waitingClick = null;
                console.log("Do the steps to respond single click");
                handleTimerStop();
              }, 251);
            }
          }}
          className={styles.clockcontainer}
        >
          <div
            className={styles.time}
            usedoubletap={() => {
              handleTimerStop();
            }}
          >
            <div className={styles.basetimer}>
              <svg class="styles.clockface" height="110" width="110">
                <circle
                  stroke="#FFFFFF"
                  strokeWidth="10"
                  r="50"
                  cx="55"
                  cy="55"
                />
                <circle
                  stroke={seconds >= 50 ? "red" : "#00263E"}
                  strokeDashoffset={
                    -((seconds / 60) * 50 * 2 * Math.PI) + 50 * 2 * Math.PI
                  }
                  strokeDasharray={50 * 2 * Math.PI}
                  strokeWidth="5"
                  fill="#F05224"
                  r="50"
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
          <button onClick={handleTimerReset}>RESET</button>
          {/* <button onClick={handleTimerStart}>START</button> */}
          {/* <button onClick={handleTimerStop}>STOP</button> */}
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

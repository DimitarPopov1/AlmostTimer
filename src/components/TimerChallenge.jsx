import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setRemainingTime] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  const handleReset = () => {
    setRemainingTime(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.showModal();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        onReset={handleReset}
        targetTime={targetTime}
        result="lost"
        remainingTime={timeRemaining}></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;

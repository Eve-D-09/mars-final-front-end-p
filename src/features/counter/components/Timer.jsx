import React, { useCallback } from "react";
import { useState, useEffect, useMemo } from "react";

const Timer = () => {
  const [years, setYears] = useState();
  const [months, setMonths] = useState();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  // const pastFrom = new Date("August, 06, 2012");
  // console.log(pastFrom);
  const pastFrom = useMemo(() => new Date("August, 06, 2012,  01:32:00"), []);
  const now = Date.now();

  const timeDiff = now - pastFrom;

  const getTime = useCallback(() => {
    setYears(Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 31 * 12)));
    setMonths(Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 31 * 11)));
    setDays(Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30));
    setHours(Math.floor((timeDiff / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((timeDiff / 1000 / 60) % 60));
    setSeconds(Math.floor((timeDiff / 1000) % 60));
  }, [timeDiff]);

  useEffect(() => {
    const interval = setInterval(() => getTime(pastFrom), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="timerContainer">
      <div>
        <h3>Since Curiosity landed on Mars: </h3>
      </div>
      <div className="timeCount">
        <p>{years} y</p>
        <p>{months} m</p>
        <p>{days} d </p>
        <p>{hours} h </p>
        <p>{minutes} min </p>
        <p>{seconds} <span>sec</span> </p>
      </div>
    </div>
  );
};

export default Timer;

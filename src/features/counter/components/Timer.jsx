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
    setMonths(Math.floor(timeDiff / (1000 * 60 * 60 * 24  * 31 * 11)));
    setDays(Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 365));
    setHours(Math.floor((timeDiff / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((timeDiff / 1000 / 60) % 60));
    setSeconds(Math.floor((timeDiff / 1000) % 60));
  }, [timeDiff]);

  useEffect(() => {
    const interval = setInterval(() => getTime(pastFrom), 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <p>Since Curiosity landed on Mars: </p>
      <p>{years} years</p>
      <p>{months} months</p>
      <p>{days} days </p>
      <p>{hours} hours </p>
      <p>{minutes} minutes </p>
      <p>{seconds} seconds </p>
    </>
  );
};

export default Timer;

import React from "react";
import { useState } from "react";

const Timer = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  const pastFrom = new Date("August, 06, 2012");
  const now = Date.now();
  const timeDiff = Math.abs(now - pastFrom);
//   console.log(timeDiff);

  // const getTime = () => {  
  //   setYears(Math.floor( timeDiff / (1000 / 60 ) ));
  //   setMonths(Math.floor(timeDiff / (1000 / 60 / 60) ));
  //   setDays(Math.floor(timeDiff / (1000 * 3600 * 24)));
  // };

  console.log(timeDiff);

//   useEffect(() => {
//     const interval = setInterval(() => getTime(pastFrom), 1000);
//     return () => clearInterval(interval);
//   }, [pastFrom, getTime ]);

  return (
    <>
      <p>{years} years</p>
      <p>{months} months</p>
      <p>{days} days </p>
    </>
  );
};

export default Timer;

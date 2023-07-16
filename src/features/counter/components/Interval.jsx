import React, { useState, useEffect } from "react";
import { intro } from "../../../myData/intro";
import "../../../styles/index.css";

const Interval = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => {
         return index === 5 ? 0 : index + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="imagesContainer">
      <div className="images">
        <img src={intro[index + 5]} alt="rover"  />
      </div>
      <div className="images">
        <img src={intro[index + 4]} alt="rover"  />
      </div>
      <div className="images">
        <img src={intro[index + 3]} alt="rover"  />
      </div>
      <div className="images">
        <img src={intro[index + 2]} alt="rover"  />
      </div>
      <div className="images">
        <img src={intro[index + 1]} alt="rover"  />
      </div>
      <div className="images">
        <img src={intro[index]} alt="rover" />
      </div>
    </div>
  );
};

export default Interval;


import React, { useState, useEffect } from 'react';
import { introImages } from '../../../myData/introImages';
import "../../../styles/index.css";


const Background = () => {
//    const colors = ["#42f572", "#f5ec42", "#f5425d", "#f542ad", "#4287f5"];
   const [ index, setIndex ] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
        setIndex((index) => {
           return index === 4 ? 0 : index + 1;
        });
    }, 3000);
    return () => clearInterval(interval);
   }, [])


    return ( <div className="backgroundContainer">
        <img src={introImages[index]} alt="mars-images" />
    </div> );
}
 
export default Background;


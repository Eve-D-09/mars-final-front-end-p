import React from "react";

const RoverInfo = (props) => {
  const rovers = [...props.filtered];

  return (
    <>
      {rovers.map((rover) => {
        return (
          <div key={rover.name}>
            <h3> Here's {rover.name}</h3>
            <p> Was launched {rover.launch}</p>
            <p> Landed on Mars {rover.landed}</p>
            <p> Rover drives max at {rover.speed}</p>
          </div>
        );
      })}
    </>
  );
};

export default RoverInfo;

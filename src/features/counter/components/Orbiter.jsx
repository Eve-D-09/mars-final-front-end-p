import React from "react";

const Orbiter = (props) => {
  const orbiters = [...props.filtered];

  return (
    <>
      {orbiters.map((orbiter) => {
        return (
          <div>
            <p>Here's {orbiter.name}</p>
            <p>Was launched {orbiter.launch}</p>
            <p>{orbiter.mission}</p>
          </div>
        );
      })}
    </>
  );
};

export default Orbiter;

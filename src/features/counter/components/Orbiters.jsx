import React from "react";
// import { orbiters } from "../../../myData/orbitersData";

const Orbiters = () => {

  // const { name } = orbiters;
  return (
    <>
      <h2>Here will be Orbiters info</h2>

      <div>
        <label>
          Choose an orbiter from the drop-down and get the info about it
        </label>
        <select>
          <option value=""></option>
          <option value="maven">Maven</option>
          <option value="odyssey">Odyssey</option>
          <option value="reconnaissance">Reconnaissance</option>
        </select>
      </div>
    </>
  );
};

export default Orbiters;

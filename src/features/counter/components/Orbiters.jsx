import React from "react";
import { orbiters } from "../../../myData/orbiters";
import { setOrbiter, selectOrbiter } from "../planetSlice";
import { useDispatch, useSelector } from "react-redux";
import Orbiter from "./Orbiter";

const Orbiters = () => {
  const dispatch = useDispatch();
  const sortOrbiter = useSelector(selectOrbiter);

  let filtered = [...orbiters];

  filtered = filtered.filter((item) => {
    return item.name === sortOrbiter;
  });

  console.log(filtered);

  return (
    <>
      <h2>Here will be Orbiters info</h2>

      <div>
        <label>
          Choose an orbiter from the drop-down and get the info about it
        </label>
        <select onChange={(e) => dispatch(setOrbiter(e.target.value))}>
          <option value=""></option>
          <option value="Maven">Maven</option>
          <option value="Odyssey">Odyssey</option>
          <option value="Reconnaissance">Reconnaissance</option>
        </select>
      </div>

      <Orbiter filtered={filtered} key={filtered.orbiter} />
    </>
  );
};

export default Orbiters;

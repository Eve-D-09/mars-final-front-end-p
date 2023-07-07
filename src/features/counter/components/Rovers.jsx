import React from "react";
import { rovers } from "../../../myData/roversData";
import { setRover, selectRover } from "../planetSlice";
import { useDispatch, useSelector } from "react-redux";
import RoverInfo from "./RoverInfo";

const Rovers = () => {
  const dispatch = useDispatch();
  const sortRover = useSelector(selectRover);

  let filtered = [...rovers];

  filtered = filtered.filter((item) => {
    // console.log(sortRover, item.name, item.name.includes(sortRover));
    return item.name === sortRover;
  });
  console.log(filtered);

  return (
    <div>
      <h2>This will be Rovers info</h2>

      <div>
        <label>Choose a rover from the drop-down and get info about it</label>
        <select onChange={(e) => dispatch(setRover(e.target.value))}>
          <option value=""></option>
          <option value="Perseverance">Perseverance</option>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirit</option>
          <option value="Sojourner">Sojourner</option>
        </select>
      </div>

      <RoverInfo filtered={filtered} key={filtered.rover} />
    </div>
  );
};

export default Rovers;

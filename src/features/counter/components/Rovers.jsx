import React from "react";

const Rovers = () => {

  return (
    <div>
      <h2>This will be Rovers info</h2>
      
      <div>
        <label>Choose a rover from the drop-down and get info about it</label>
        <select>
          <option value=""></option>
          <option value="perseverance">Perseverance</option>
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
          <option value="Sojourner">Sojourner</option>
        </select>
      </div>
    </div>
  );
};

export default Rovers;


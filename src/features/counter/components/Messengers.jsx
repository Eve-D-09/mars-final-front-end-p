import React from "react";
import Header from "./Header";

const Messengers = () => {
  return (
    <>
    <Header />
    <h2>Some h2</h2>
      <div>
        <nav>
          <a href="/#" id="1"> Rovers</a>
          <a href="/#" id="2"> Orbiters</a>
          <a href="/#" id="3"> Ingenuity helicopter</a>
          <a href="/#" id="4"> Insight </a>
        </nav>
      </div>
      {/* {screenMode === 0 && <p>Rovers</p>}
      {screenMode === 1 && <p> Orbiters</p>}
      {screenMode === 2 && <p>Ingenuity helicopter</p>}
      {screenMode === 3 && <p>Insight </p>} */}
    </>
  );
};

export default Messengers;

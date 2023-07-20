import React from "react";
import "../../../styles/index.css";

const Loading = () => {
  return (
    <div className="spinnerContainer">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

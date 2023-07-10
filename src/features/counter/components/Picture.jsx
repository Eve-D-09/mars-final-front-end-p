import React from "react";
import ButtonUp from "./ButtonUp";

const Picture = (props) => {
  const { today, explanation, title, img } = props;

  return (
    <>
      <div className="dayPicture">
        <div className="picture">
          <img src={img} alt={title} />
        </div>
        <div className="pictureContent">
          <h2>{title}</h2>
          <p>{explanation}</p>
          <p>{today}</p>
        </div>
      </div>
      <ButtonUp />
    </>
  );
};

export default Picture;

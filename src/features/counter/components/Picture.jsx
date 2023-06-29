import React from "react";

const Picture = (props) => {
  const { today, explanation, title, img } = props;

  return (
    <>
      <div className="dayPicture">
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{explanation}</p>
          <p>{today}</p>
        </div>
      </div>
    </>
  );
};

export default Picture;

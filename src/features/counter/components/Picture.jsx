import React, { useState } from "react";

const Picture = (props) => {
  const { today, explanation, title, img } = props;

  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <button onClick={handleMoreClick}>Show me Picture of the Day</button>
      {/* {showMore && (
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
      )} */}
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

import React, { useEffect, useState } from "react";
import { selectPicOfDay } from "../planetSlice";
import { useSelector } from "react-redux";
// import axios from "axios";
import Picture from "./Picture";
import Loading from "./Loading";
import Logo from "./Logo";
import { getData } from "../../../controllers/dataControllers";

// import "./App.css";

const PicOfDay = () => {
  const [showPicture, setShowPicture] = useState(false);

  const picOfDay = useSelector(selectPicOfDay);

  useEffect(() => {
    getData(
      `picOfDay`,
      `get`,
      `https://api.nasa.gov/planetary/apod?api_key=Mmse3giht0jkNDr9PqbdtsAnvxXdRAo0fzrSXcB4`
    );
  }, [ ]);

  // console.log(picOfDay);

  if (!picOfDay) return <Loading />;

  const handleClick = () => {
    setShowPicture(!showPicture);
  };

  return (
    <>
      <button onClick={handleClick}>Show me Picture of the Day</button>
      {showPicture && (
        <Picture
          today={picOfDay.date}
          title={picOfDay.title}
          explanation={picOfDay.explanation}
          img={picOfDay.url}
        />
      )}
      <Logo />
    </>
  );
};

export default PicOfDay;

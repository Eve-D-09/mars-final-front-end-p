import React, { useEffect, useState } from "react";
import { selectPicOfDay } from "../planetSlice";
import { useSelector } from "react-redux";
import Picture from "./Picture";
import Loading from "./Loading";
import { getData } from "../../../controllers/dataControllers";
import FavoritesSection from "../toggleFavorites/FavoritesSection";


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

 

  if (!picOfDay) return <Loading />;

  const handleClick = () => {
    setShowPicture(!showPicture);
  };

  return (
    <>
    <div className="picOfDayContainer">
      <h2>Astronomy Picture of The Day</h2>
      <p>Every day, since 1990, Hubble Space telescope takes the pictures and sends them back to Earth. </p>
      <p>Since 2022, July, James Webb telescope started his journey into space.</p>
      <p> Now we can provide you amazing photos from across universe each day!</p>
      <button onClick={handleClick}>Show me Picture</button>
    </div>
    {/* ------------------------------------------- */}
    <div>hello there</div>
    <FavoritesSection />
    {/* ------------------------------------------- */}
    {/* <div className="picOfDayResult"> */}
     {showPicture && (
      <div className="picOfDayResult">
        <Picture
          today={picOfDay.date}
          title={picOfDay.title}
          explanation={picOfDay.explanation}
          img={picOfDay.url}
        />
        </div>
      )}
    {/* </div> */}
    
    
    </>
  );
};

export default PicOfDay;

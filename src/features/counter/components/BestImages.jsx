import React from "react";
import { useSelector } from "react-redux";
import Slider from "./Slider";
import { selectSlides } from "../planetSlice";


const BestImages = () => {

  const slides = useSelector(selectSlides);
  return (
    <>
      <div className="bestImages">
        <h2>Best Images from mars</h2>
        <div className="imageSlider">
          <Slider slides={slides}  />
        </div>
      </div>
    </>
  );
};

export default BestImages;

import React from "react";
import { useSelector } from "react-redux";
import Slider from "./Slider";
import { selectSlides } from "../planetSlice";

const BestImages = () => {
  const slides = useSelector(selectSlides);
  return (
    <div className="bestImages">
      <h2>Best Images from Mars</h2>
        <Slider slides={slides} />
    </div>
  );
};

export default BestImages;

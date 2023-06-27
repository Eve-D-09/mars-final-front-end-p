import React from "react";
import { imageData } from "../../../myData/imageData";
import Slider from "./Slider";

const BestImages = () => {
  return (
    <>
      <div>
        <h2>Best Images from mars</h2>
        <div className="imageSlider">
          <Slider slides={imageData} />
        </div>
      </div>
    </>
  );
};

export default BestImages;

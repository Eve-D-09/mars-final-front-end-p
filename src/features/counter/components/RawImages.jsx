import React from "react";
import ButtonUp from "./ButtonUp";

const RawImages = (props) => {
  const rawImages = [...props.rawImages];
  rawImages.length = 20;
  return (
    <div className="rawImagesBox">
      {rawImages.map((image) => {
        return (
          <>
            <div className="rawImagesContainer">
              <div className="rawImagesTitle">
                <p>Taken by: {image.rover.name}</p>
                <p>On: {image.earth_date}</p>
                <p>Camera: {image.camera.full_name}</p>
              </div>
              
              <div className="rawImage">
                <img src={image.img_src} alt="mars-images" />
              </div>
            </div>
            
          </>
          
        );
      })}
      <ButtonUp />
    </div>
    
  );
};

export default RawImages;

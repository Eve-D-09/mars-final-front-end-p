import React from "react";
import ButtonUp from "./ButtonUp";
// import { useDispatch} from "react-redux";
// import { setToastMessage } from "../planetSlice";

const RawImages = (props) => {
  const rawImages = [...props.rawImages];
  // rawImages.length = 20;

  // const dispatch = useDispatch();
  // console.log(rawImages.length);

  // if( rawImages.length === 0) {
  //   dispatch(setToastMessage("We are sorry, Rover was on vacations this particular day"));
  // }

  return (
    <div className="rawImagesBox">
      {rawImages.map((image, index) => {
        console.log(index);
        if (index > 10) return;
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

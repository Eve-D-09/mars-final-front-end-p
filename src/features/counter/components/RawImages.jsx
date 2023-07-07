import React from "react";

const RawImages = (props) => {
  const rawImages = [...props.rawImages];
  rawImages.length = 20;
  return (
    <>
      {rawImages.map((image) => {
        return (
          <div>
            <p>{image.rover.name}</p>
            <p>Camera: {image.camera.full_name}</p>
            <p>{image.earth_date}</p>
            <img src={image.img_src} alt="mars-images" />
            
          </div>
        );
      })}
    </>
  );
};

export default RawImages;



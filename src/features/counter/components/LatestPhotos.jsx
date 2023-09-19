import React from "react";

const LatestPhotos = (props) => {
   const photos = [...props.latestPhotos];
  
  return (<>
      {photos.map((photo, index) => {
        return (
          <>
          <div className="rawImagesContainer">
            <div className="rawImagesTitle">
              <p>Taken by: {photo.rover.name}</p>
              <p>On: {photo.earth_date}</p>
              <p>Camera: {photo.camera.full_name}</p>
            </div>

            <div className="rawImage">
              <img src={photo.img_src} alt="mars-images" />
            </div>
          </div>
        </>
        )
      })}

  </>);
};

export default LatestPhotos;

import React from "react";
import ToggleFavoritePhoto from "../toggleFavorites/TogglefavoritePhoto";

const LatestPhotos = (props) => {
   const photos = [...props.photos];
  
  return (<>
      {photos.map((photo, index) => {
        return (
          <>
          <div className="rawImagesContainer">
            <div className="rawImagesTitle">
              <ToggleFavoritePhoto id={photo.id} img={photo} liked={photo.liked} key={photo.id}/>
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

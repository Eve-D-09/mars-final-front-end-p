import React from "react";
import { useSelector } from "react-redux";
import { selectRawImages, selectFavoritesImages } from "../rawImagesSlice";
import ToggleFavoriteButton from "./ToggleFavoriteButton";

const FavoritesSection = () => {
  const rawImages = useSelector(selectRawImages);
  const favoritesImages = useSelector(selectFavoritesImages);

  const favorites = rawImages.filter((image) => {
    return favoritesImages.includes(image.id);
  });

  console.log(favorites);

  

  return (
    <>
      {favorites.map((image) => {
        return (
          <div className="rawImagesContainer">
            <div className="rawImagesTitle">
              <ToggleFavoriteButton id={image.id} liked={image.liked} />
              <p>Taken by: {image.rover.name}</p>
              <p>On: {image.earth_date}</p>
              <p>Camera: {image.camera.full_name}</p>
            </div>

            <div className="rawImage">
              <img src={image.img_src} alt="mars-images" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FavoritesSection;

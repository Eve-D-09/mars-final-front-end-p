import React from "react";
import { useSelector } from "react-redux";
import { selectRawImages, selectFavoritesImages } from "../rawImagesSlice";
import ToggleFavoriteButton from "./ToggleFavoriteButton";

const FavoritesSection = () => {

  const rawImages = useSelector(selectRawImages);
  const favoritesImages = useSelector(selectFavoritesImages);

  

  // rawImages.filter((image) => {
  //   return favoritesImages.includes(image.id);
  // });

  //  const getFavoritesImages = () => {
  //   const favoritesImages = JSON.parse(localStorage.getItem("favoritesImages"));
  //   return favoritesImages ? favoritesImages: {};
  // }

   const storageData = JSON.parse(localStorage.getItem("favoriteUrl"));
  
  //   useEffect would prevent from rerendering everytime
  // useEffect(() => {
  //   localStorage.setItem("favoriteUrl", JSON.stringify(imageUrl))
  //   console.log(storageData);
  // }, [favoriteUrl]);
  
  

 console.log(favoritesImages);
 console.log(storageData);
  
  

  return (
    <>
      {storageData.map((image) => {
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
      {storageData.length === 0 && <p>there are no favorites pictures</p>}
    </>
  );
};

export default FavoritesSection;

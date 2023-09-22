import React from "react";
import { useSelector } from "react-redux";
import { selectRawImages } from "../rawImagesSlice";
import ToggleFavoriteButton from "./ToggleFavoriteButton";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";

const FavoritesSection = (props) => {

  const rawImages = useSelector(selectRawImages);
 

   const storageData = JSON.parse(localStorage.getItem("favoriteUrl"));
  
  //   useEffect would prevent from rerendering everytime
  // useEffect(() => {
  //   localStorage.setItem("favoriteUrl", JSON.stringify(imageUrl))
  //   console.log(storageData);
  // }, [favoriteUrl]);
  

  //  console.log(favoritesImages);
  console.log(storageData);
  console.log();
  // ------------------------------
  const { id, liked } = props;
  console.log(id, liked);
  

  return (
    <>
    {!storageData && <p>there are no favorites pictures yet</p>}
      {storageData.map((image) => {
        return (
          <div className="rawImagesContainer" >
            <div className="rawImagesTitle">
              
              <ToggleFavoriteButton  id={props.id} liked={liked ? <HeartIcon style={{ fill: "#fc037b" }} /> : <HeartIcon />}/>
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

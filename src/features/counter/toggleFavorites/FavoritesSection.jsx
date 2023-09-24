import React from "react";
import { useSelector } from "react-redux";
// import { selectRawImages } from "../rawImagesSlice";
import ToggleFavoriteButton from "./ToggleFavoriteButton";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
import { selectFavoriteUrl } from "../rawImagesSlice";

const FavoritesSection = (props) => {
  //   do not delete this line:
  // const storageData = JSON.parse(localStorage.getItem("favoriteUrl"));

  //  and change storageData.map
  // console.log(storageData);
  // -------------------------------

  const favoriteUrl = useSelector(selectFavoriteUrl);

  //   useEffect(() => {
  //     if (storageData) {
  //         setFavoriteUrl(storageData);
  //     }
  // }, [storageData]);

  // useEffect(()=>{
  //   if (favoriteUrl.length > 0) {
  //       localStorage.setItem("favoriteUrl", JSON.stringify(favoriteUrl))
  //   }  },[favoriteUrl]);

  console.log(favoriteUrl);

  // ------------------------------
  const { id, liked } = props;
  // console.log(id, liked);

  return (
    <>
      {!favoriteUrl && <p>there are no favorites pictures yet</p>}
      {favoriteUrl.map((image) => {
        return (
          <div className="rawImagesContainer">
            <div className="rawImagesTitle">
              <ToggleFavoriteButton
                id={id}
                liked={
                  liked ? (
                    <HeartIcon style={{ fill: "#fc037b" }} />
                  ) : (
                    <HeartIcon />
                  )
                }
              />
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { selectRawImages } from "../rawImagesSlice";
import ToggleFavoriteButton from "./ToggleFavoriteButton";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
import { selectFavoriteUrl } from "../rawImagesSlice";
import { removeFavorite } from "../rawImagesSlice";

const FavoritesSection = (props) => {
  const { id, liked } = props;
  //   do not delete next line:
  // const storageData = JSON.parse(localStorage.getItem("favoriteUrl"));

  //  and change storageData.map
  // console.log(storageData);
  // -------------------------------

  const favoriteUrl = useSelector(selectFavoriteUrl);
  // console.log(favoriteUrl);

  const dispatch = useDispatch();

  // ------------------------------

  return (
    <>
      {favoriteUrl.length === 0 ? (
        <p>there are no favorites pictures yet</p>
      ) : (
        favoriteUrl.map((image) => {
          console.log(image);
          return (
            
            <div className="rawImagesContainer">
              <div className="rawImagesTitle">
                <button
                  onClick={() => dispatch(removeFavorite(image.id))}
                  style={{ width: 75, height: "auto" }}
                >
                  Remove
                </button>
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
        })
      )}
    </>
  );
};

export default FavoritesSection;

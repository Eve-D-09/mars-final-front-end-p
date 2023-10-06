import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
import { toggleLatestPhoto } from "../latestPhotosSlice";
import { setFavoriteImages } from "../favoriteImagesSlice";

const ToggleFavoritePhoto = (props) => {
    //  props are comming from LatestPhotos.jsx
  const dispatch = useDispatch();
  const { id, img, liked } = props;

  const heartClick = () => {
    dispatch(toggleLatestPhoto(id, img, liked));
    dispatch(setFavoriteImages(img, liked));
  };

  return (
    <div className="heartButton">
      <button onClick={heartClick}>
        {liked ? <HeartIcon style={{ fill: "#fc037b" }} /> : <HeartIcon />}
      </button>
    </div>
  );
};

export default ToggleFavoritePhoto;

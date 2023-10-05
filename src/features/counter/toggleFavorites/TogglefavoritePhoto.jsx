import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
import { toggleLatestPhoto } from "../latestPhotosSlice";
import { setFavoriteImages } from "../rawImagesSlice";

const ToggleFavoritePhoto = (props) => {
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
        {/* <HeartIcon /> */}
      </button>
    </div>
  );
};

export default ToggleFavoritePhoto;

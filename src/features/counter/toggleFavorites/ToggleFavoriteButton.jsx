import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
import { toggleFavoriteImage } from "../rawImagesSlice";
import { setFavoriteImages } from "../rawImagesSlice";

//  props id and liked  come from RawImages

const ToggleFavoriteButton = (props) => {
  const dispatch = useDispatch();
  const { id, liked, img } = props;

  const onHeartClick = () => {
    dispatch(toggleFavoriteImage(id, img, liked));
    dispatch(setFavoriteImages(img, liked));
    // localStorage.setItem("favoritesUrl", img);
  };
 
  

  return (
    <>
      <div className="heartButton">
        <button onClick={onHeartClick}>
          {liked ? <HeartIcon style={{ fill: "#fc037b" }} /> : <HeartIcon />}
        </button>
      </div>
    </>
  );
};

export default ToggleFavoriteButton;

import React from 'react';
import { useDispatch } from "react-redux";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
import { toggleFavoriteImage } from "../rawImagesSlice";

//  props id and liked would come from RawImages

const ToggleFavoriteButton = (props) => {
    const { id, liked } = props;

    const dispatch = useDispatch();

    const onHeartClick = () => {
        dispatch(toggleFavoriteImage(id));
        
    }

    return ( <>
    <div className="heartButton">
      <button onClick={onHeartClick}>
        {liked ? <HeartIcon style={{ fill: "#fc037b" }} /> : <HeartIcon />}
      </button>
    </div>
    
    </> );
}
 
export default ToggleFavoriteButton;
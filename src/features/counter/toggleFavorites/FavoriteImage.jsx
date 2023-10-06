import React from "react";
import { useDispatch } from "react-redux";
import { addLikes, removeFavorite } from "../favoriteImagesSlice";
import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";

const FavoriteImage = (props) => {
  const dispatch = useDispatch();

  const { id, liked, image, total } = props;

  const handleLike = () => {
    dispatch(addLikes(id, liked, total));
  };

  console.log(id, liked, image.totalLikes);

  return (
    
    <div className="favoriteImagesContainer">
      <div className="favoriteImagesTitle">
        <div className="controlButton">
          <p>{image.totalLikes || 0}</p>
          <button onClick={handleLike} ><HeartIcon style={{ fill: "#fc037b", width: "35", height: "35" }} /></button>
        </div>
        {/* <p>Image ID -- {id}</p> */}
        <p>Taken by: {image.rover.name}</p>
        <p>On: {image.earth_date}</p>
        <p>Camera: {image.camera.full_name}</p>
      </div>
      <div className="favoriteImage">
        <img src={image.img_src} alt="mars-images" />
      </div>
      <div className="removeButton">
         <button onClick={() => dispatch(removeFavorite(image.id))}  > Remove </button>
      </div>
    </div>
    
  );
};

export default FavoriteImage;

/* <button onClick={() => dispatch(addLikes(image.id))} style={{ width: 75, height: "auto" }} > Like </button> */

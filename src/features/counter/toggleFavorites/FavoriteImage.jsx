import React from "react";
import { useDispatch } from "react-redux";
import { addLikes, removeFavorite } from "../favoriteImagesSlice";


const FavoriteImage = (props) => {
  const dispatch = useDispatch();

  const { id,liked, image, total } = props;


 const handleLike = () => {
    dispatch(addLikes(id, liked, total));
 };

//  console.log(id, liked, total);

  return (
    <div className="rawImagesBox">
      <div className="rawImagesContainer">
        <div className="rawImagesTitle">
          <button
            onClick={() => dispatch(removeFavorite(image.id))}
            style={{ width: 75, height: "auto" }} >
            Remove
          </button>
          <p>Total likes: {total}</p>
          {/* <button onClick={() => dispatch(addLikes(image.id))} style={{ width: 75, height: "auto" }} > Like </button> */}
          <button onClick={handleLike}  style={{ width: 75, height: "auto" }} > Like </button>
          <p>Taken by: {image.rover.name}</p>
          <p>On: {image.earth_date}</p>
          <p>Camera: {image.camera.full_name}</p>
        </div>
        <div className="rawImage">
          <img src={image.img_src} alt="mars-images" />
        </div>
      </div>
    </div>
  );
};

export default FavoriteImage;

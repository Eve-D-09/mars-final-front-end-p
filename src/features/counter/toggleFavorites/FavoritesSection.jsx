import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import ToggleFavoriteButton from "./ToggleFavoriteButton";
// import { ReactComponent as HeartIcon } from "../../../img/svg/heart-like-svgrepo-com.svg";
import { selectFavoriteImages } from "../rawImagesSlice";
import { removeFavorite } from "../rawImagesSlice";
// import { toggleFavoriteImage } from "../rawImagesSlice";

import { addLikes } from "../rawImagesSlice";

const FavoritesSection = (props) => {
  const favoriteImages = useSelector(selectFavoriteImages);
  // const total = useSelector(selectTotal);
  
  // const { id, liked } = props;
  //   do not delete next line:
  // const storageData = JSON.parse(localStorage.getItem("favoriteUrl"));

  //  and change storageData.map
  // console.log(storageData);
  
  const dispatch = useDispatch();
  console.log(favoriteImages);
  // ------------------------------------
 let total = 0;
 
  favoriteImages.forEach((image) => {
    if (image.liked) {
    total++;
    } 
    console.log(image.id, total, image.liked);
  })
  
 
  return (
    <>
      {favoriteImages.length === 0 ? (
        <p>there are no favorites pictures yet</p>
      ) : (
        favoriteImages.map((image) => {
          
          return (
            <div className="rawImagesContainer">
              <div className="rawImagesTitle">
                <button onClick={() => dispatch(removeFavorite(image.id))}  style={{ width: 75, height: "auto" }} >
                  Remove
                </button>
                <p>Total likes:{total} </p>
                <button onClick={() => dispatch(addLikes(image.id)) } style={{ width: 75, height: "auto" }}>Like</button>
               
                {/* <ToggleFavoriteButton id={id} liked={ liked ? ( <HeartIcon style={{ fill: "#fc037b" }} /> ) : ( <HeartIcon /> )} /> */}
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

// https://www.youtube.com/watch?v=lslDIWwzB8Q
// https://devpress.csdn.net/react/62f421987e668234661880c7.html
// https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react

// https://redux.js.org/tutorials/essentials/part-4-using-data

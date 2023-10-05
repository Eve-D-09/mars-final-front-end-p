import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteImage from "./FavoriteImage";

import { selectFavoriteImages, setTotalLikes } from "../favoriteImagesSlice";

const FavoritesSection = (props) => {
  const favoriteImages = useSelector(selectFavoriteImages);
  const dispatch = useDispatch();
  
  // const { id, liked } = props;
 
  console.log(favoriteImages);
 
  
   let calculateTotal = 0;

    favoriteImages.forEach((image) => {
        if(image.liked) {
          calculateTotal++;
        }
        dispatch(setTotalLikes(calculateTotal));
    });
 
  return (
    <>
      {favoriteImages.length === 0 ? (
        <p>there are no favorites pictures yet</p>
      ) : (
        favoriteImages.map((image, index) => {
          console.log(image.id, calculateTotal );
          return <FavoriteImage image={image} key={image.id}  id={image.id} liked={image.liked} total={calculateTotal} />
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

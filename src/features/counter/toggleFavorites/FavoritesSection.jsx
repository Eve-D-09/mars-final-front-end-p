import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteImage from "./FavoriteImage";
import { selectFavoriteImages, calculateTotal } from "../favoriteImagesSlice";

const FavoritesSection = (props) => {
  const favoriteImages = useSelector(selectFavoriteImages);
  const dispatch = useDispatch();
  
  // const { id, liked } = props;
 
  console.log(favoriteImages);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, favoriteImages])

 
  
  //  let calculateTotal = 0;

  //   favoriteImages.forEach((image) => {
  //       if(image.liked) {
  //         calculateTotal++;
  //       }
  //       dispatch(setTotalLikes(calculateTotal));
  //   });
 
  return (
    <>
      <div className="favoriteImagesWrapper">
        <h2>Take a look what photos people like the most</h2>
      <div className="favoriteImagesBox">
      {favoriteImages.length === 0 ? (
        <p>there are no favorites pictures yet</p>
      ) : (
        favoriteImages.map((image, index) => {
          return <FavoriteImage image={image} key={image.id}  id={image.id} liked={image.liked} total={calculateTotal} />
        })
      )}
      </div>
      </div>
    </>
  );
};

export default FavoritesSection;

// https://www.youtube.com/watch?v=lslDIWwzB8Q
// https://devpress.csdn.net/react/62f421987e668234661880c7.html
// https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react

// https://redux.js.org/tutorials/essentials/part-4-using-data

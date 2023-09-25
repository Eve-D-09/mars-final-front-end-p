import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // rawImages: [],
  // imageUrl: [],
  favoriteUrl: [],
  // favoriteUrl: JSON.parse(localStorage.getItem("favoriteUrl")),
  
};

export const rawImagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setRawImages: (state, action) => {
      state.rawImages = action.payload;
    },
    toggleFavoriteImage: (state, action) => {
      console.log(action);
      const indexOf = state.rawImages.findIndex((image) => {
        return image.id === action.payload;
      });
      state.rawImages[indexOf].liked = !state.rawImages[indexOf].liked;
    },
    setFavoriteUrl: (state, action) => {
      state.favoriteUrl.push(action.payload);
      localStorage.setItem("favoriteUrl", JSON.stringify(state.favoriteUrl));
      // ----------------------------------------------------------------------------
    
    },
    removeFavorite: (state, action) => {
      console.log(action);
      const indexOf = state.favoriteUrl.findIndex((image) => {
        return image.id === action.payload;
      })
      state.favoriteUrl.splice(indexOf, 1);
      localStorage.setItem("favoriteUrl", JSON.stringify(state.favoriteUrl));
    },
   
  },
});

export const { setRawImages, toggleFavoriteImage, setFavoriteUrl, removeFavorite } = rawImagesSlice.actions;

export const selectRawImages = (state) => state.images.rawImages;
export const selectFavoriteUrl = (state) => state.images.favoriteUrl;

export default rawImagesSlice.reducer;


// localStorage links:
// https://stackoverflow.com/questions/73130905/why-local-storage-does-not-work-with-useeffect
// https://stackoverflow.com/questions/70856630/rendering-items-array-in-localstorage-to-unordered-list
// https://dev-academy.com/react-localstorage/
// https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
// https://blog.logrocket.com/localstorage-javascript-complete-guide/



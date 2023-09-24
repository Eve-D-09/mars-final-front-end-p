import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // rawImages: [],
  // imageUrl: [],
  // favoriteUrl: [],
  favoriteUrl: JSON.parse(localStorage.getItem("favoriteUrl")),
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
      
      // if (state.favoritesImages.includes(action.payload)) {
      //   state.favoritesImages.splice(indexOf, 1);
      // } else {
      //   state.favoritesImages.push(action.payload);
      //   // localStorage.setItem("favoritesImages", state.image);
      // }
      state.rawImages[indexOf].liked = !state.rawImages[indexOf].liked;
      
    },
    setFavoriteUrl: (state, action) => {
      state.favoriteUrl.push(action.payload);
      localStorage.setItem("favoriteUrl", JSON.stringify(state.favoriteUrl));
      
    }
  },
});

export const { setRawImages, toggleFavoriteImage, setFavoriteUrl } = rawImagesSlice.actions;

export const selectRawImages = (state) => state.images.rawImages;
export const selectFavoriteUrl = (state) => state.images.favoriteUrl;

export default rawImagesSlice.reducer;



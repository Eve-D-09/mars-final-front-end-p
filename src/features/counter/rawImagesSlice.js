import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // rawImages: [],
  favoritesImages: [],
  imageUrl: [],
};

export const rawImagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setRawImages: (state, action) => {
      state.rawImages = action.payload;
    },
    toggleFavoriteImage: (state, action) => {
      const indexOf = state.rawImages.findIndex((image) => {
        return image.id === action.payload;
      });
      
      if (state.favoritesImages.includes(action.payload)) {
        state.favoritesImages.splice(indexOf, 1);
      } else {
        state.favoritesImages.push(action.payload);
        // localStorage.setItem("favoritesImages", state.image);
      }
      state.rawImages[indexOf].liked = !state.rawImages[indexOf].liked;
      
    },
    setFavoriteUrl: (state, action) => {
      state.imageUrl.push(action.payload);
      localStorage.setItem("favoriteUrl", JSON.stringify(state.imageUrl))
    }
  },
});

export const { setRawImages, toggleFavoriteImage, setFavoriteUrl } = rawImagesSlice.actions;

export const selectRawImages = (state) => state.images.rawImages;
export const selectFavoritesImages = (state) => state.images.imageUrl;

export default rawImagesSlice.reducer;



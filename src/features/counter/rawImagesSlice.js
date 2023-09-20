import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesImages: [],
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
      }
      state.rawImages[indexOf].liked = !state.rawImages[indexOf].liked;
    },
  },
});

export const { setRawImages, toggleFavoriteImage } = rawImagesSlice.actions;

export const selectRawImages = (state) => state.images.rawImages;
export const selectFavoritesImages = (state) => state.images.favoritesImages;

export default rawImagesSlice.reducer;

// export default latestPhotosSlice.reducer;

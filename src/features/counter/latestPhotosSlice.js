import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // latestPhotos: 0,
};

export const latestPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLatestPhotos: (state, action) => {
      state.latestPhotos = action.payload;
    },

    toggleLatestPhoto: (state, action) => {
      console.log(action);
      const indexOf = state.latestPhotos.latest_photos.findIndex((photo) => {
        return photo.id === action.payload;
      })
      state.latestPhotos.latest_photos[indexOf].liked = !state.latestPhotos.latest_photos[indexOf].liked;
    }
  },
});

export const { setLatestPhotos, toggleLatestPhoto } = latestPhotosSlice.actions;

export const selectLatestPhotos = (state) => state.photos.latestPhotos;


export default latestPhotosSlice.reducer;
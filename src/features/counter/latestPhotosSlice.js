import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLatestPhotos: (state, action) => {
      state.latestPhotos = action.payload;
    },
  },
});

export const { setLatestPhotos } = photosSlice.actions;

export const selectLatestPhotos = (state) => state.photos.latestPhotos;

export default photosSlice.reducer;
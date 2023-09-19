import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestPhotos: 0,
};

export const latestPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLatestPhotos: (state, action) => {
      state.latestPhotos = action.payload;
    },
  },
});

export const { setLatestPhotos } = latestPhotosSlice.actions;

export const selectLatestPhotos = (state) => state.photos.latestPhotos;

export default latestPhotosSlice.reducer;
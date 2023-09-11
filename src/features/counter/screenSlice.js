import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenMode: 0,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
  },
});

export const { setScreenMode } = screenSlice.actions;

export const selectScreenMode = (state) => state.screen.screenMode;

export default screenSlice.reducer;

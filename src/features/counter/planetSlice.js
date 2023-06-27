import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  
};


export const planetSlice = createSlice({
  name: 'planet',
  initialState,
  reducers: {
    setPicture: ( state, action) => {
      state.picture = action.payload;
    },
    
    setPlanet: ( state, action) => {
      state.planet = action.payload;
    },

    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },

    
  },  
 
  
});

export const { setPicture, setPlanet, setScreenMode } = planetSlice.actions;


export const selectPicture = (state) => state.counter.picture;
export const selectPlanet = (state) => state.counter.planet;
export const selectScreenMode = (state) => state.counter.screenMode;


export default planetSlice.reducer;

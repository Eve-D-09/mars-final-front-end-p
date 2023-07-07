import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  screenMode: 0,
};


export const planetSlice = createSlice({
  name: 'planet',
  initialState,
  reducers: {
    setPicOfDay: ( state, action) => {
      state.picOfDay = action.payload;
    },
    
    setRawImages: ( state, action) => {
      console.log(`reducer received data`);
      state.rawImages = action.payload;
    },

    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
    
    setRover: ( state, action) => {
      state.rover = action.payload;
    },

    setOrbiter: ( state, action) => {
      state.orbiter = action.payload;
    },

    setSearch: ( state, action ) => {
      state.search = action.payload;
    },

    setCalendar: ( state, action ) => {
      state.calendar = action.payload;
    },

    toggleClicked: (state, action) => {
      const indexOf = state.slides.findIndex((slide) => {
            return slide.index === action.payload;
          });
          state.slides[indexOf].clicked = !state.slides[indexOf].clicked;
    },
    
    
  },  
 
  
});

export const { setPicOfDay, setRawImages, setScreenMode, setRover, setOrbiter, setSearch, setCalendar, toggleClicked } = planetSlice.actions;


export const selectPicOfDay = (state) => state.counter.picOfDay;
export const selectRawImages = (state) => state.counter.rawImages;
export const selectScreenMode = (state) => state.counter.screenMode;
export const selectRover = ( state ) => state.counter.rover;
export const selectOrbiter = ( state ) => state.counter.orbiter;
export const selectSearch = ( state ) => state.counter.search;
export const selectCalendar = ( state ) => state.counter.calendar;


export default planetSlice.reducer;

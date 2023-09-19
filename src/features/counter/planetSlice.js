import { createSlice } from "@reduxjs/toolkit";
import { slides } from "../../myData/slides";
import { ingenuity } from "../../myData/ingenuity";
import { insight } from "../../myData/insight";
import { intro } from "../../myData/intro";
import { orbiters } from "../../myData/orbiters";
import { paragraphs } from "../../myData/paragraphs";
import { rovers } from "../../myData/rovers";

const initialState = {
  value: 0,
  slides: slides,
  ingenuity: ingenuity,
  insight: insight,
  intro: intro,
  orbiters: orbiters,
  paragraphs: paragraphs,
  rovers: rovers,
  user: [],
  token: localStorage.getItem("token"),
  
};

export const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {
    setPicOfDay: (state, action) => {
      state.picOfDay = action.payload;
    },

    setRawImages: (state, action) => {
      console.log(`reducer received data`);
      state.rawImages = action.payload;
    },


    setRover: (state, action) => {
      state.rover = action.payload;
    },

    setOrbiter: (state, action) => {
      state.orbiter = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCalendar: (state, action) => {
      state.calendar = action.payload;
    },

    toggleClicked: (state, action) => {
      console.log(action);
      const indexOf = state.slides.findIndex((slide) => {
        return slide.id === action.payload;
      });

      state.slides[indexOf].liked = !state.slides[indexOf].liked;
    },
    setToastMessage: (state, action) => {
      state.toastMessage = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const {
  setPicOfDay,
  setRawImages,
  setRover,
  setOrbiter,
  setSearch,
  setCalendar,
  toggleClicked,
  setFavoriteSlide,
  setToastMessage,
  setToken,
  setUser,
} = planetSlice.actions;

export const selectPicOfDay = (state) => state.counter.picOfDay;
export const selectRawImages = (state) => state.counter.rawImages;
export const selectRover = (state) => state.counter.rover;
export const selectOrbiter = (state) => state.counter.orbiter;
export const selectSearch = (state) => state.counter.search;
export const selectCalendar = (state) => state.counter.calendar;
export const selectSlides = (state) => state.counter.slides;
export const selectParagraphs = (state) => state.counter.paragraphs;
export const selectIngenuity = (state) => state.counter.ingenuity;
export const selectInsight = (state) => state.counter.insight;
export const selectToastMessage = (state) => state.counter.toastMessage;
export const selectToken = (state) => state.counter.token;
export const selectUser = (state) => state.counter.user;

export default planetSlice.reducer;

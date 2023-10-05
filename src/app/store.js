import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/planetSlice';
import screenReducer from "../features/counter/screenSlice";
import photosReducer from '../features/counter/latestPhotosSlice';
import imagesReducer from "../features/counter/rawImagesSlice";
import favoritesReducer from "../features/counter/favoriteImagesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    screen: screenReducer,
    photos: photosReducer,
    images: imagesReducer,
    favorites: favoritesReducer,
  },
});

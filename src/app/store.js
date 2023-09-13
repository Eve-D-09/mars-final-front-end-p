import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/planetSlice';
import screenReducer from "../features/counter/screenSlice";

import photosSlice from "../features/counter/latestPhotosSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    screen: screenReducer,
    photos: photosSlice,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/planetSlice';
import screenReducer from "../features/counter/screenSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    screen: screenReducer,
  },
});

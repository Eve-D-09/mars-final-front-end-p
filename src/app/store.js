import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/planetSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

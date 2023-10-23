import { configureStore } from '@reduxjs/toolkit';
import introductionReducer from '../features/introductionSlice';
import blogReducer from '../features/blogSlice';

const store = configureStore({
  reducer: {
    introduction: introductionReducer,
    blog: blogReducer,
  },
});

export default store;

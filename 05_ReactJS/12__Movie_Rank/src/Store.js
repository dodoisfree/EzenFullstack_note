import { configureStore } from "@reduxjs/toolkit";
import MovieRankSlice from './Slices/MovieRankSlice';

const Store = configureStore({
  reducer: {
    movieRank: MovieRankSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;
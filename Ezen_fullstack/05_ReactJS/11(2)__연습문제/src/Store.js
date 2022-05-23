import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./Slice/NewsSlice";

const Store = configureStore({
  reducer: {
    news: newsSlice,
  },
  devTools: true,
});

export default Store;

import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./Slice/NewsSlice";

const Store = configureStore({
  reducer: {
    news: newsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;

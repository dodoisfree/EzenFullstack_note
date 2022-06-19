import { configureStore } from "@reduxjs/toolkit";
import Covid19Slice from "./slices/Covid19Slice";

const Store = configureStore({
  reducer: {
      covid19: Covid19Slice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;
import { configureStore } from "@reduxjs/toolkit";
import CarCrashSlice from "./slices/CarCrashSlice";

const Store = configureStore({
  reducer: {
    carCrash: CarCrashSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;
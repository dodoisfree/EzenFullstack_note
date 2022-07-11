import { configureStore } from "@reduxjs/toolkit";
import DepartmentSlice from "./slices/DepartmentSlice";

const Store = configureStore({
  reducer: {
      DepartmentSlice: DepartmentSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;
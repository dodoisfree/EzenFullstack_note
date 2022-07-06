import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import counterSlice from "./Slice/CounterSlice";
import departmentSlice from "./Slice/DepartmentSlice";

const logger = createLogger();

const Store = configureStore({
  reducer: {
    // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
    counter: counterSlice,
    department: departmentSlice
  },
  // 미들웨어
  middleware: [...getDefaultMiddleware({serializableCheck: false}) ,logger],
  // redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시 안함
  devTools: true,
});

export default Store;

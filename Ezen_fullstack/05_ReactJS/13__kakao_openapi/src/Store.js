import { configureStore } from "@reduxjs/toolkit";
import KakaoSlice from './Slices/kakaoSlice';

const Store = configureStore({
  reducer: {
      kakao: KakaoSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;
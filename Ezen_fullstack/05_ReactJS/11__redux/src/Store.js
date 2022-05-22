import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './Slice/CounterSlice';

const Store = configureStore({
  reducer: {
    // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
    counter: CounterSlice
  }
});

export default Store;
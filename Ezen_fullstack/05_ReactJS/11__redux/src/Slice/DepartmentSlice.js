import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터.
export const getList = createAsyncThunk("department/getList", async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get('http://localhost:3001/department');
  } catch (err) {
    // 에러 발생시 `rejectWithValue()` 함수에 여러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
    result = rejectWithValue(err.response);
  }

  return result;
});

/** Slice 정의 (Action함수 + Reducer의 개념) */
const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    data: null,       // Ajax 처리를 통해 수신된 데이터
    loading: false,   // 로딩 여부
    error: null       // 에러정보
  },
  // 내부 action 및 동기 action
  reducers: {},
  // 외부 action 및 비동기 action (Ajax용)
  extraReducers: {
    [getList.pending]: (state, { payload }) => {
      return { ...state, loading: true }
    },
    [getList.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getList.rejected]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : 'Server Error'
        }
      }
    }
  },
});

// 리듀서 객체 내보내기
export default departmentSlice.reducer;
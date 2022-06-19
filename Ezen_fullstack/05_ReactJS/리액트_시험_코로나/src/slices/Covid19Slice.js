import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getInfo = createAsyncThunk('covid19/getInfo', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get(`http://localhost:3001/covid19?${payload.date}`);
  } catch (err) {
    result = rejectWithValue(err.response);
    console.log('실패');
  }
  return result;
});

const Covid19Slice = createSlice({
  name: 'covid19',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getInfo.pending]: (state, { payload }) => {
      return { ...state, loading: true }
    },
    [getInfo.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getInfo.rejected]: (state, { payload }) => {
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

export default Covid19Slice.reducer;
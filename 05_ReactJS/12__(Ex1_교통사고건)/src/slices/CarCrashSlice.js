import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getList = createAsyncThunk('carCrash/getList', async (payload, { rejectWithValue }) => {
  
  let result = null;
  try {
    result = await axios.get('http://localhost:3001/traffic_acc', {
      params: payload
    });
    if (result.data.faultInfo !== undefined) {
      const err = new Error();
      err.response = {status: 500, statusText: result.data.faultInfo.message};
      throw err;
    }
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

const CarCrashSlice = createSlice({
  name: 'carCrash',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
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

export default CarCrashSlice.reducer;
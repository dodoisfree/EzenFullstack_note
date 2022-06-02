import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const option = {
  covid19: '',
  confirmed: 'confirmed_gte=1&confirmed_lte=9999',
  confirmde_acc: 'confirmed_acc_gte=1&confirmed_acc_lte=9999',
  active: 'active_gte=1&active_lte=9999',
  released: 'released_gte=1&released_lte=9999',
  released_acc: 'released_acc_gte=1&released_acc_lte=9999',
  death: 'death_gte=1&death_lte=9999',
  death_acc: 'death_acc_gte=1&death_acc_lte=9999',
}

export const getInfo = createAsyncThunk('covid19/getInfo', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get(`http://localhost:3001/covid19?${payload.date}&${option[payload.option]}`);
  } catch (err) {
    result = rejectWithValue(err.response);
    console.log('실패');
  }
  //console.log(payload.date,result);
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
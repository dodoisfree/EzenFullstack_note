import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = {
  web: 'https://dapi.kakao.com/v2/search/web',
  blog: 'https://dapi.kakao.com/v2/search/image',
  cafe: 'https://dapi.kakao.com/v2/search/cafe',
  book: 'https://dapi.kakao.com/v3/search/book',
  image: 'https://dapi.kakao.com/v2/search/image',
}

const API_KEY = '8dd322609444f19d7248550cf5fba7a2'

export const getKakaoSearch = createAsyncThunk('KakaoSlice/getKakaoSearch', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get(API_URL[payload.api ? payload.api : 'web'], {
      params: {
        query: payload.query,
        sort: payload.sort ? payload.sort : null,
        page: payload.page ? payload.page : 1,
        size: payload.size ? payload.size : 20
      },
      headers: { Authorization: `KakaoAK ${API_KEY}`}
    });
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

const KakaoSlice = createSlice({
  name: 'kakao',
  initialState: {
    meta: null,
    documents: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getKakaoSearch.pending]: (state, { payload }) => {
      return { ...state, loading: true }
    },
    [getKakaoSearch.fulfilled]: (state, { payload }) => {
      return {
        meta: payload?.data?.meta,
        documents: payload?.data?.documents,
        loading: false,
        error: null
      }
    },
    [getKakaoSearch.rejected]: (state, { payload }) => {
      return {
        meta: null,
        documents: null,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : 'Server Error'
        }
      }
    }
  },
});

export default KakaoSlice.reducer;
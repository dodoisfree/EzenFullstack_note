import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
const AIP_KEY = "4bc5376d49c2732308fe98a14606f396";

export const getMovieRank = createAsyncThunk('MovieRankSlice/getMovieRank', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get(API_URL, {
      params: {
        key: AIP_KEY,
        // 컨트롤러에서 전달하는 파라미터는 payload로 전달된다.
        // --> 단일 값인 경우 payload 자체가 그 값.
        // --> JSON인 경우 payload가 JSON이 된다.
        targetDt: payload.targetDt
      }
    });

    // 서버에 따라 에러가 발생하더라도 HTTP 상태코드는 200으로 응답이 올 수 있기 떄문에 catch문이 동작하지 않을 수 있다.
    // 그러므로 직접 에러를 감지해야 한다.
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

const MovieRankSlice = createSlice({
  name: 'movieRank',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getMovieRank.pending]: (state, { payload }) => {
      return { ...state, loading: true }
    },
    [getMovieRank.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null
      }
    },
    [getMovieRank.rejected]: (state, { payload }) => {
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

export default MovieRankSlice.reducer;
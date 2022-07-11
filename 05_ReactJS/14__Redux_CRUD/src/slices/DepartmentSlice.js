import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../Util";

const API_URL = "http://localhost:3001/department";

/* 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, { rejectWithValue }) => {
        let result = null;

        try {
            result = await axios.get(API_URL, {
                params: {
                    query: payload?.query,
                    page: payload?.page,
                    rows: payload?.rows,
                }
            });
        } catch (err) {
            result = rejectWithValue(err.response);
        }

        return result;
    }
);

/* 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk("DepartmentSlice/getItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(`${API_URL}/${payload?.deptno}`);
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
}
);

/* 데이터 저장를 위한 비동기 함수 */
export const postItem = createAsyncThunk("DepartmentSlice/postItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.post(API_URL, {
            dname: payload.dname,
            loc: payload.loc
        });
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
}
);

/* 데이터 수정 위한 비동기 함수 */
export const putItem = createAsyncThunk("DepartmentSlice/putItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.put(`${API_URL}/${payload.deptno}`, {
            dname: payload.dname,
            loc: payload.loc
        });
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
}
);

/* 데이터 삭제 위한 비동기 함수 */
export const deleteItem = createAsyncThunk("DepartmentSlice/deleteItem", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.delete(`${API_URL}/${payload.deptno}`);
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
}
);

const DepartmentSlice = createSlice({
    name: "DepartmentSlice",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,

        [getItem.pending]: pending,
        [getItem.fulfilled]: fulfilled,
        [getItem.rejected]: rejected,

        [postItem.pending]: pending,
        [postItem.fulfilled]: fulfilled,
        [postItem.rejected]: rejected,

        [putItem.pending]: pending,
        [putItem.fulfilled]: fulfilled,
        [putItem.rejected]: rejected,

        [deleteItem.pending]: pending,
        [deleteItem.fulfilled]: fulfilled,
        [deleteItem.rejected]: rejected,
    },
});

export default DepartmentSlice.reducer;

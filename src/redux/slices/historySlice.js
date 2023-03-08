import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as historyApi from '../../APIs/historyApi'

export const addHistory = createAsyncThunk("history/addHistory", historyApi.addHistory)
export const getHistory = createAsyncThunk("history/getHistory", historyApi.getHistory)

const initialState = {
    history: []
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
        .addCase(addHistory.fulfilled, (state, action) => {
            state.history = [action.payload, ...state.history];
        })
        .addCase(getHistory.fulfilled, (state, action) => {
            state.history = action.payload;
        })
    }
});

export const {} = historySlice.actions
export const selectHistory = (state) => state.history.history
export default historySlice.reducer
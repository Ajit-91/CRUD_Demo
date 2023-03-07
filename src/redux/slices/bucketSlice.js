import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as bucketApi from "../../APIs/bucketApi"

export const getAllBuckets = createAsyncThunk("buckets/getAllBuckets", bucketApi.getAllBuckets)
export const createBucket = createAsyncThunk("buckets/getAllBuckets", bucketApi.createBucket)
export const updateBucket = createAsyncThunk("buckets/getAllBuckets", bucketApi.updateBucket)
export const deleteBucket = createAsyncThunk("buckets/getAllBuckets", bucketApi.deleteBucket)

const initialState = {
    bucketsData : null
}

const bucketSlice = createSlice({
  name: "buckets",
  initialState,
  reducers: {},
    extraReducers: {
        // getAllBuckets
        [getAllBuckets.fulfilled]: (state, {payload}) => {
            state.bucketsData = payload;
        },

        [getAllBuckets.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },
        
        // createBucket
        [createBucket.fulfilled]: (state, {payload}) => {
            state.bucketsData = payload;
        },

        [createBucket.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },

        // updateBucket
        [updateBucket.fulfilled]: (state, {payload}) => {
            state.bucketsData = payload;
        },

        [updateBucket.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },

        // deleteBucket
        [deleteBucket.fulfilled]: (state, {payload}) => {
            state.bucketsData = payload;
        },

        [deleteBucket.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },
    }
});

export const {} = bucketSlice.actions
export const selectBuckets = state => state.buckets.bucketsData
export default bucketSlice.reducer
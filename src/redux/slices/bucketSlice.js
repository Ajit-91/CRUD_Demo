import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as bucketApi from "../../APIs/bucketApi"

export const getAllBuckets = createAsyncThunk("buckets/getAllBuckets", bucketApi.getAllBuckets)
export const createBucket = createAsyncThunk("buckets/createBucket", bucketApi.createBucket)
export const updateBucket = createAsyncThunk("buckets/updateBucket", bucketApi.updateBucket)
export const deleteBucket = createAsyncThunk("buckets/deleteBucket", bucketApi.deleteBucket)

const initialState = {
    bucketsData: null,
    currentBucket: null
}

const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        setCurrentBucket: (state, { payload }) => {
            state.currentBucket = payload;
        }
    },
    extraReducers: {
        // getAllBuckets
        [getAllBuckets.fulfilled]: (state, { payload }) => {
            state.bucketsData = payload;
        },

        [getAllBuckets.rejected]: (_, { payload }) => {
            console.log("getAllBuckets.rejected : ", payload);
        },

        // createBucket
        [createBucket.fulfilled]: (state, { payload }) => {
            state.bucketsData = [...state.bucketsData, payload];
            console.log("createing new bucket")
        },

        [createBucket.rejected]: (_, { payload }) => {
            console.log("rejected", payload);
        },

        // updateBucket
        [updateBucket.fulfilled]: (state, { payload }) => {
            console.log({updateBPayload: payload})
            const index = state.bucketsData.findIndex(bucket => bucket.id === payload.id)
            state.bucketsData[index] = payload
            console.log("updateing  bucket")
        },

        [updateBucket.rejected]: (_, { payload }) => {
            console.log("rejected", payload);
        },

        // deleteBucket
        [deleteBucket.fulfilled]: (state, { payload }) => {
            state.bucketsData = payload;
        },

        [deleteBucket.rejected]: (_, { payload }) => {
            console.log("rejected", payload);
        },
    }
});

export const { setCurrentBucket } = bucketSlice.actions
export const selectBuckets = state => state.buckets.bucketsData
export const selectCurrentBucket = state => state.buckets.currentBucket
export default bucketSlice.reducer
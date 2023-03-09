import { fetchThunkApi } from "../utils/fetchApi";

export const getAllBuckets = async (_, {rejectWithValue}) => {
    const route = process.env.REACT_APP_BASE_URL + "/buckets";
    const options = {
        method: "GET",
    };
    
    return fetchThunkApi(route, options, rejectWithValue);
}

export const createBucket = async (bucket, {rejectWithValue}) => {
    const route = process.env.REACT_APP_BASE_URL + "/buckets";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bucket),
    };
    
    return fetchThunkApi(route, options, rejectWithValue);
}

export const updateBucket = async (bucket, {rejectWithValue}) => {
    const route = process.env.REACT_APP_BASE_URL + "/buckets/" + bucket.id;
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bucket),
    };
    
    return fetchThunkApi(route, options, rejectWithValue);
}

// export const deleteBucket = async (bucketId, {rejectWithValue}) => {
//     const route = process.env.REACT_APP_BASE_URL + "/buckets/" + bucketId;
//     const options = {
//         method: "DELETE",
//     };
    
//     return fetchThunkApi(route, options, rejectWithValue);
// }
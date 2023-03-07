import {configureStore} from "@reduxjs/toolkit"
import bucketSlice from "./slices/bucketSlice"
import cardSlice from "./slices/cardSlice"

export default configureStore({
    reducer : {
        cards : cardSlice,
        buckets : bucketSlice
    }
})
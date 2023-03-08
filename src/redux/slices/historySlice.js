import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    history: []
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
//   extraReducers : (builder) => {
//     builder
//       .addCase('ADD_TO_HISTORY', (state, action) => {
//         state.history.push(action.payload)
//       })
//   }
});

export const {} = historySlice.actions

export default historySlice.reducer
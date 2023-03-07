import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as cardApi from "../../APIs/cardApi"

export const getAllCards = createAsyncThunk("cards/getAllCards", cardApi.getAllCards)
export const createCard = createAsyncThunk("cards/getAllCards", cardApi.createCard)
export const updateCard = createAsyncThunk("cards/getAllCards", cardApi.updateCard)
export const deleteCard = createAsyncThunk("cards/getAllCards", cardApi.deleteCard)

const initialState = {
    cardsData : null
}

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
    extraReducers: {
        // getAllCards
        [getAllCards.fulfilled]: (state, {payload}) => {
            state.cardsData = payload;
        },
        [getAllCards.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },

        // createCard
        [createCard.fulfilled]: (state, {payload}) => {
            state.cardsData = payload;
        },
        [createCard.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },

        // updateCard
        [updateCard.fulfilled]: (state, {payload}) => {
            state.cardsData = payload;
        },
        [updateCard.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },

        // deleteCard
        [deleteCard.fulfilled]: (state, {payload}) => {
            state.cardsData = payload;
        },
        [deleteCard.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        }

    }
});

export const {} = cardSlice.actions
export const selectCards = state => state.cards.cardsData
export default cardSlice.reducer
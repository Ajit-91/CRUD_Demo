import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as cardApi from "../../APIs/cardApi"

export const getAllCards = createAsyncThunk("cards/getAllCards", cardApi.getAllCards)
export const createCard = createAsyncThunk("cards/createCard", cardApi.createCard)
export const updateCard = createAsyncThunk("cards/updateCard", cardApi.updateCard)
export const deleteCard = createAsyncThunk("cards/deleteCard", cardApi.deleteCard)

const initialState = {
    cardsData : null,
    currentCard : null
}

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
        setCurrentCard: (state, {payload}) => {
            state.currentCard = payload;
        }
  },
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
            state.cardsData = [...state.cardsData, payload];
        },
        [createCard.rejected]: (_, {payload}) => {
            console.log("rejected",payload);
        },

        // updateCard
        [updateCard.fulfilled]: (state, {payload}) => {
            const index = state.cardsData.findIndex(card => card.id === payload.id)
            state.cardsData[index] = payload
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

export const {setCurrentCard} = cardSlice.actions
export const selectCards = state => state.cards.cardsData
export const selectCurrentCard = state => state.cards.currentCard
export default cardSlice.reducer
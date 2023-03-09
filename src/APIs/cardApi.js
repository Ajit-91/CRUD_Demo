import { fetchApi, fetchThunkApi } from "../utils/fetchApi";

export const getAllCards = async (id, {rejectWithValue}) => {
    const route = `${process.env.REACT_APP_BASE_URL}/cards?bucketId=${id}`;
    console.log({route})
    const options = {
        method: "GET",
    };
    
    return fetchThunkApi(route, options, rejectWithValue);
}

export const createCard = async (card, {rejectWithValue}) => {
    const route = process.env.REACT_APP_BASE_URL + "/cards";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
    };
    
    return fetchThunkApi(route, options, rejectWithValue);
}

export const updateCard = async (card, {rejectWithValue}) => {
    const route = process.env.REACT_APP_BASE_URL + "/cards/" + card.id;
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
    };
    
    return fetchThunkApi(route, options, rejectWithValue);
}

export const deleteCard = async (cardId) => {
    const route = process.env.REACT_APP_BASE_URL + "/cards/" + cardId;
    const options = {
        method: "DELETE",
    };
    
    return fetchApi(route, options);
}

export const deleteMultipleCards = async (cardIds) => {
    // use deleteCard function and Promis.all to delete multiple cards
    const promises = cardIds.map((cardId) => deleteCard(cardId));
    return Promise.all(promises);
}
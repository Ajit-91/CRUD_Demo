import { fetchThunkApi } from "../utils/fetchApi";

export const getAllCards = async (_, {rejectWithValue}) => {
    const route = process.env.REACT_APP_BASE_URL + "/cards";
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

export const deleteCard = async (cardId, {rejectWithValue}) => {
    const route = process.env.REACT_APP_BASE_URL + "/cards/" + cardId;
    const options = {
        method: "DELETE",
    };
    
    return fetchThunkApi(route, options, rejectWithValue);
}
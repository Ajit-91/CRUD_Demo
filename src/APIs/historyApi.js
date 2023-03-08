import { fetchApi } from "../utils/fetchApi";

export const getHistory = async () => {
    const route = process.env.REACT_APP_BASE_URL + "/history?_sort=time&_order=desc";
    const options = {
        method: "GET",
    };
    
    return fetchApi(route, options);
}

export const addHistory = async (history) => {
    const route = process.env.REACT_APP_BASE_URL + "/history";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(history),
    };
    
    return fetchApi(route, options);
}
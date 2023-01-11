import axios from "axios";

export const api = axios.create({
    baseURL: "https://swapi.dev/api",
    headers: {
        "Content-type": "application/json"
    }
})

export const getPeople = async () => {
    const response = await api.get("/people");
    return response.data;
}

export const getPlanets = async (page = 1) => {
    const response = await api.get(`/planets/?page=${page}`);
    return response.data;
}
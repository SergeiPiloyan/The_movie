import axios from "axios";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://api.themoviedb.org/",
    headers: { "API-KEY": "7abdf4f84826e38c2288d4dc3c7532e8" },
});

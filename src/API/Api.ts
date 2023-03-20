import axios, { AxiosResponse } from "axios";


export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

instance.interceptors.request.use((request) => {
  request.params = {
    api_key: '7abdf4f84826e38c2288d4dc3c7532e8',
    ...request.params,
  };
  return request;
});


export const filmApi = {
  get: async (id: number) => {
    const response: AxiosResponse = await instance.get(`movie/${id}`);
    return response.data;
  },
};

export const actorApi = {
  get: async (id: number) => {
    const response: AxiosResponse = await instance.get(`/movie/${id}/credits`);
    return response.data;
  },
};

export const reviewApi = {
  get: async (id: number) => {
    const response: AxiosResponse = await instance.get(`/movie/${id}/reviews`);
    return response.data;
  },
};
export const recommendationsApi = {
  get: async (id: number) => {
    const response: AxiosResponse = await instance.get(`/movie/${id}/recommendations`);
    return response.data;
  },
};
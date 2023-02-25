import axios, { AxiosResponse } from "axios";


export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});
const id = 640146;

instance.interceptors.request.use((request) => {
  request.params = {
    api_key: '7abdf4f84826e38c2288d4dc3c7532e8',
    ...request.params,
  };
  return request;
});



export const filmApi = {
    get: async (id: number) => {
      const response: AxiosResponse = await instance.get("movie/" + id);
      return response.data;
    },
  };

  export const personApi = {
    get: async (personId: number) => {
      const response: AxiosResponse = await instance.get("person/" + personId);
      return response.data;
    },
  };
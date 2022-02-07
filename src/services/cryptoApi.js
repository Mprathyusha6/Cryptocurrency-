import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '4e06e8c306msh4858ade04fc117ap1a9109jsnd0172b79552a'
};

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

const baseUrl ='https://coinranking1.p.rapidapi.com/coins';

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});
console.log(createApi);

export const { useGetCryptosQuery } = cryptoApi;

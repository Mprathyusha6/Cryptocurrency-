import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeader={
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '4e06e8c306msh4858ade04fc117ap1a9109jsnd0172b79552a',

}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoApiHeader});

export const cryptoApi=createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos:builder.query({
      query:()=> createRequest('/coins')
    })
  })

}); 

export const {
  useGetCryptosQuery
}=cryptoApi;
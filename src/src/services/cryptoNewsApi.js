import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoNewsApiHeader={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '4e06e8c306msh4858ade04fc117ap1a9109jsnd0172b79552a'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoNewsApiHeader});

export const cryptoNewsApi=createApi({
  reducerPath:'cryptoNewsApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptoNews:builder.query({
      query:({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })

}); 

export const {
  useGetCryptoNewsQuery
}=cryptoNewsApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEWS_API_HEADERS = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "c08aba5280msh458b6e9131ac357p113069jsna10e54b6f23e",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const BASE_URL = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: NEWS_API_HEADERS });

export const NewsAPI = createApi({
  reducerPath: "NewsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = NewsAPI;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CRYPTO_API_HEADERS = {
  "X-RapidAPI-Key": "c08aba5280msh458b6e9131ac357p113069jsna10e54b6f23e",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const BASE_URL = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: CRYPTO_API_HEADERS });

export const CryptoAPI = createApi({
  reducerPath: "CryptoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timePeriod} `),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = CryptoAPI;

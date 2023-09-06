import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            // Add the required headers
            headers.set('X-RapidAPI-Key', '8b1dfd11d2mshb936b365637f841p184e7fjsn378c660016a7');
            headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`, // Specify the API endpoint here
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`, // Specify the API endpoint here
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => `coin/${coinId}/history?timeperiod=${timePeriod}`, // Specify the API endpoint here
        }),
        // Add more endpoints as needed
    }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
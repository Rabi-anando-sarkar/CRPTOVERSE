import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.append('X-BingApis-SDK', 'true');
            headers.append('X-RapidAPI-Key', '8b1dfd11d2mshb936b365637f841p184e7fjsn378c660016a7');
            headers.append('X-RapidAPI-Host', 'bing-news-search1.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getNewsCryptos : builder.query({
            query: ({ newsCategory, count }) => `/v2/everything?q=${newsCategory}&publishedAt&apiKey=8b1dfd11d2mshb936b365637f841p184e7fjsn378c660016a7&count=${count}`,
        }),
    }),
});

export const { useGetNewsCryptosQuery } = cryptoNewsApi;
 
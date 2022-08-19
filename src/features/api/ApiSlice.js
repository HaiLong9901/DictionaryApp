import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en'}),
    endpoints: builder => ({
        getWord: builder.query({
            query: word => `/${word}`
        })
    })
})

export const { useGetWordQuery } = ApiSlice
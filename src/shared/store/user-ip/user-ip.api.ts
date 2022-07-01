import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const userIP = createApi({
  reducerPath: 'userIP',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getUserIP: builder.query({
      query: () => ({
        url: '/api',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserIPQuery } = userIP;

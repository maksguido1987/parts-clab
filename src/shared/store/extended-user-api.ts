import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../api';

export const extendedUserApi = createApi({
  reducerPath: 'userAPI',
  tagTypes: ['User'],
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});

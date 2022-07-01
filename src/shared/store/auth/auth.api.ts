import { extendedUserApi } from '../extended-user-api';
import { ILoginRequest } from './auth.interfaces';

export const authAPI = extendedUserApi.injectEndpoints({
  endpoints: (builder) => ({
    authSendCode: builder.mutation<
      { result: 'OK' },
      Omit<ILoginRequest, 'code'>
    >({
      query: (data: Omit<ILoginRequest, 'code'>) => ({
        url: 'auth/code',
        method: 'POST',
        data,
      }),
    }),
    authLogin: builder.mutation<{ result: 'OK' }, ILoginRequest>({
      query: (data: ILoginRequest) => ({
        url: 'auth/login',
        method: 'POST',
        data,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),

    authLogout: builder.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAuthLoginMutation,
  useAuthSendCodeMutation,
  useAuthLogoutMutation,
} = authAPI;

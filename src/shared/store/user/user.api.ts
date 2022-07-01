import { extendedUserApi } from '../extended-user-api';
import { IUserData, IUserAddress } from './user.interfaces';

export const userAPI = extendedUserApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUserData, void>({
      query: () => ({
        url: '/account',
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...[result].map(({ id }) => ({ type: 'User' as const, id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),
    setUserData: builder.mutation<{ result: 'OK' }, IUserData>({
      query: (data: IUserData) => ({
        url: 'account',
        method: 'POST',
        data,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    setUserAddress: builder.mutation<{ result: 'OK' }, IUserAddress>({
      query: (data: IUserAddress) => ({
        url: 'account/address',
        method: 'POST',
        data,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserQuery,
  useSetUserDataMutation,
  useSetUserAddressMutation,
} = userAPI;

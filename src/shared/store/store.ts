import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { suggestionsSlice } from '../../widgets';
import { extendedUserApi } from './extended-user-api';
import { userIP } from './user-ip';

export const store = configureStore({
  reducer: {
    suggestions: suggestionsSlice.reducer,
    [extendedUserApi.reducerPath]: extendedUserApi.reducer,
    [userIP.reducerPath]: userIP.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false, //TODO избавляет от ворнингов в консоли
    }).concat(extendedUserApi.middleware, userIP.middleware),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

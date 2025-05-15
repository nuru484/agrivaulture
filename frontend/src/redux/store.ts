// redux/features/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import type { EnhancedStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import authReducer from './auth/authSlice';
import authDialogReducer from './auth/authDialogSlice';

export const store: EnhancedStore = configureStore({
  reducer: {
    auth: authReducer,
    authDialog: authDialogReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;

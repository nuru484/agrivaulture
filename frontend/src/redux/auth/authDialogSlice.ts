import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

export type AuthDialogType = 'login' | 'signup' | null;

interface AuthDialogState {
  activeDialog: AuthDialogType;
}

const initialState: AuthDialogState = {
  activeDialog: null,
};

export const authDialogSlice = createSlice({
  name: 'authDialog',
  initialState,
  reducers: {
    openLoginDialog: (state) => {
      state.activeDialog = 'login';
    },
    openSignupDialog: (state) => {
      state.activeDialog = 'signup';
    },
    closeAllDialogs: (state) => {
      state.activeDialog = null;
    },
  },
});

// Export actions
export const { openLoginDialog, openSignupDialog, closeAllDialogs } =
  authDialogSlice.actions;

// Export selectors
export const selectActiveDialog = (state: RootState) =>
  state.authDialog.activeDialog;

export default authDialogSlice.reducer;

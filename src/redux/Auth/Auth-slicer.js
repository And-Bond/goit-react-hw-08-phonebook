import { createSlice } from '@reduxjs/toolkit';
import { authRegister } from './Auth-operation';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authRegister.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [authRegister.fulfilled]: (store, { payload }) => {
      store.token = payload.token;
      store.loading = false;
      store.user = payload.user;
    },
    [authRegister.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },
  },
});

 
import { createSlice } from '@reduxjs/toolkit';
import { authRegister,authLogin } from './Auth-operation';

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
      store.token = payload?.token;
      store.loading = false;
      store.user = payload?.user;
      store.isLogin = true
    },
    [authRegister.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
      store.isLogin = false
    },
    [authLogin.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [authLogin.fulfilled]: (store, {payload}) => {
      store.token = payload?.token;
      store.loading = false;
      store.user = payload?.user;
      store.isLogin = true
    },
    [authLogin.rejected]: (store, {payload}) => {
      store.error = payload
      store.loading = false
      store.isLogin = false
    }
  },
});

 
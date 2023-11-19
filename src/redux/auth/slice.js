import { createSlice } from '@reduxjs/toolkit';
import {
  registrationThunk,
  loginThunk,
  logOut,
  refreshThunk,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registrationThunk.fulfilled](state, action) {
      state.user = action.payload.user;
      console.log(action.payload)
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [loginThunk.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    [refreshThunk.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [registrationThunk.pending](state) {
      state.isLoading = true;
    },
    [loginThunk.pending](state) {
      state.isLoading = true;
    },
    [logOut.pending](state) {
      state.isLoading = true;
    },
    [refreshThunk.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [registrationThunk.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [loginThunk.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [logOut.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [refreshThunk.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
      state.isRefreshing = false;
    },
  },
});
export default authSlice.reducer;

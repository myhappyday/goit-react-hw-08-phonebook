import { createSlice } from '@reduxjs/toolkit';
import {
  userRegister,
  userLogIn,
  userLogOut,
  fetchCurrentUser,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // userData: null,
    user: { name: null, email: null },
    token: null,
    isLogged: false,
    // isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(userRegister.pending, state => {
        state.isLoading = true;
        state.error = null;
        // state.isLogged = false;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(userLogIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(userLogOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogged = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isRefreshing = false;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

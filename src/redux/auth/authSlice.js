import { createSlice } from '@reduxjs/toolkit';
import { userRegister, userLogIn, userLogOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogged: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(userRegister.pending, state => {
        state.isLoading = true;
        state.error = null;
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
        state.error = null;
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

      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

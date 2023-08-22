export const selectUserData = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLogged = state => state.auth.isLogged;
export const selectUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserEmail = state => state.auth.user.email;

import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
    [authOperations.logout.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](state, action) {
      state.error = action.error.message;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
    },
    [authOperations.refreshCurrentUser.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
    },
  },
});

export const authReducer = authSlice.reducer;

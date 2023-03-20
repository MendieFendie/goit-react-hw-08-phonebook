import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.token);
    return response.data;
  } catch (e) {}
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);

    return response.data;
  } catch (e) {}
});

const logout = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', null, credentials);
    token.unset();
  } catch (e) {}
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue();
    // }

    try {
      token.set(persistedToken);
      const responce = await axios.get('users/current');

      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  login,
  logout,
  refreshCurrentUser,
};

export default authOperations;

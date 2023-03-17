import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    return response.data;
  } catch (e) {}
});

const login = createAsyncThunk('auth/login', async user => {
  try {
    const response = await axios.post('/users/login', user);
    console.log(response.data);
    return response.data;
  } catch (e) {}
});

const authOperations = {
  register,
  login,
};

export default authOperations;

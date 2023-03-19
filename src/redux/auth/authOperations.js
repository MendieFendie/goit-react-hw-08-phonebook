import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import authSelectors from './authSelectors';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    return response.data;
  } catch (e) {}
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    return response.data;
  } catch (e) {}
});

const logout = createAsyncThunk('auth/logout', async credentials => {
  try {
    const response = await axios.post('/users/logout', null, credentials);
    return response.data;
  } catch (e) {}
});

const authOperations = {
  register,
  login,
  logout,
};

export default authOperations;

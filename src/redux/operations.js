import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/post',
  async (data, thunkApi) => {
    try {
      const responce = await axios.post('/contacts', data);
      return responce.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);
      return responce.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

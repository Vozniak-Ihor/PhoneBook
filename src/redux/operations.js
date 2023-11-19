import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { instance, setAuthHeader } from './auth/operations';
Notify.init({
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'from-bottom',
  clickToClose: true,
  messageMaxLength: 200,
  timeout: 5000,
  width: '300px',
});
export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (state.auth.token) {
        setAuthHeader(state.auth.token);
      } else {
        throw new Error('No token');
      }
      const response = await instance('/api/contacts');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await instance.post('/api/contacts', contact);
      Notify.success('Сontact added', { fontSize: '15px', width: '200px' });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/contacts/${id}`);
      Notify.failure('Contact deleted', {
        fontSize: '15px',
        width: '200px',
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

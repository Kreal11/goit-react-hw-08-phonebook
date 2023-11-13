import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCurrentId } from './contactsSlice';
import { userAuthApi } from './auth/operations';

// axios.defaults.baseURL = 'https://654a30b8e182221f8d52b0a2.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'fetchAllContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await userAuthApi.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    try {
      thunkApi.dispatch(setCurrentId(id));
      const { data } = await userAuthApi.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (body, thunkApi) => {
    try {
      const { data } = await userAuthApi.post('contacts', body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'editContact',
  async ({ id, ...body }, thunkApi) => {
    try {
      const { data } = await userAuthApi.patch(`contacts/${id}`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

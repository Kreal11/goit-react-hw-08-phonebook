import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userAuthApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const addToken = token => {
  userAuthApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  userAuthApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await userAuthApi.post('users/signup', credentials);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await userAuthApi.post('users/login', credentials);
      addToken(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await userAuthApi.post('users/logout');
    clearToken();
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});

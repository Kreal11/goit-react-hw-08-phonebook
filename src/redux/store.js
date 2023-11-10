import { contactsReducer } from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

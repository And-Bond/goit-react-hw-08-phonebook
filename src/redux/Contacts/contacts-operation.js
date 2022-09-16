import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from '../../shared/api';

export const getFetchedContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const postContacts = createAsyncThunk(
  'contacts/post',
  async (contact, thunkApi) => {
    try {
      const newContact = await postContact(contact);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkApi) => {
    try {
      const contact = await deleteContact(id);
      return contact.id;
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
  }
);


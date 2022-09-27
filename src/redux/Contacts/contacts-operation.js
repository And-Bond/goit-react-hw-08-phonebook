import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from '../../shared/api';

export const getFetchedContacts = createAsyncThunk(
  'contacts/fetch',
  async (token, thunkApi) => {
    try {
      const data = await getContacts(token);
      return data;
    } catch ({response}) {
      const {data} = response
        thunkApi.rejectWithValue(data.message)
    }
  }
);

export const postContacts = createAsyncThunk(
  'contacts/post',
  async ({data, token}, thunkApi) => {
    try {
      const newContact = await postContact(data, token);
      return newContact;
    } catch ({response}) {
      const {data} = response
        thunkApi.rejectWithValue(data.message)
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/delete',
  async ({id, token}, thunkApi) => {
    try {
      const contact = await deleteContact(id,token);
      return contact.id;
    } catch ({response}) {
      const {data} = response
        thunkApi.rejectWithValue(data.message)
    }
  }
);


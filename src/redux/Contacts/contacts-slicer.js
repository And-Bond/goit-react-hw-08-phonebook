import { createSlice } from '@reduxjs/toolkit';
import { getFetchedContacts, postContacts, removeContact } from './contacts-operation';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [getFetchedContacts.fulfilled]: (_, {payload}) =>  payload,
    [postContacts.fulfilled]: (store, {payload}) => [...store, payload],
    [removeContact.fulfilled]: (store, {payload}) => store.filter(contact => contact.id !== payload)
  },
});

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  extraReducers: {
    [getFetchedContacts.pending]: () => true,
    [postContacts.pending] : () => true,
    [removeContact.pending] : () => true,
    [getFetchedContacts.fulfilled]: () =>  false,
    [postContacts.fulfilled]: () =>  false,
    [removeContact.fulfilled]: () =>  false,
    [getFetchedContacts.rejected]: () => false,
    [postContacts.rejected]: () => false,
    [removeContact.rejected]: () => false,
  }
})

export const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [getFetchedContacts.rejected]: (_, {payload}) => payload,
    [postContacts.rejected]: (_, {payload}) => payload,
    [removeContact.rejected]: (_, {payload}) => payload,
  }
})



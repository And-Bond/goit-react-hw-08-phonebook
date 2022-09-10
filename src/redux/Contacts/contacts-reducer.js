import {
  fetchContactsSuccess,
  fetchContactsLoading,
  fetchContactsError,
} from './contacts-action';
import {
  postContactsSuccess,
  postContactsLoading,
  postContactsError,
} from './contacts-action';
import {
  deleteContactsSuccess,
  deleteContactsLoading,
  deleteContactsError
} from './contacts-action';
import { createReducer } from '@reduxjs/toolkit';


export const errorReducer = createReducer(null, {
  [fetchContactsError.type]: (_, { payload }) => payload,
  [fetchContactsLoading.type]: () => false,
  [postContactsError.type]: (_, {payload}) => payload,
  [postContactsLoading.type]: () => false,
  [deleteContactsError.type]: (_, {payload}) => payload,
  [deleteContactsLoading.type]: () => false
});

export const successReducer = createReducer([], {
  [fetchContactsSuccess.type]: (_, { payload }) => payload,
  [postContactsSuccess.type]: (store, {payload}) => [...store, payload],
  [deleteContactsSuccess.type]: (store, {payload}) => store.filter(contact => contact.id !== payload) 
});

export const loadingReducer = createReducer(false, {
  [fetchContactsSuccess.type]: () => false,
  [fetchContactsError.type]: () => false,
  [fetchContactsLoading.type]: () => true,
  [postContactsLoading.type]: () => true,
  [postContactsSuccess.type]: () => false,
  [postContactsError.type]: () => false,
  [deleteContactsSuccess.type]: () => false,
  [deleteContactsLoading.type]: () => true,
  [deleteContactsError.type]: () => false
});

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as authSlicer from './Auth/Auth-slicer'

import * as conSlicer from './Contacts/contacts-slicer';
import filterReducer from './Filter/filter-reducer';

const contactsReducer = combineReducers({
  items: conSlicer.itemsSlice.reducer,
  loading: conSlicer.loadingSlice.reducer,
  error: conSlicer.errorSlice.reducer,
  filter: filterReducer,
});



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authSlicer.authSlice.reducer
  },
});

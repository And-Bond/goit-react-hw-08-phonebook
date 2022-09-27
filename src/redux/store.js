import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

import * as authSlicer from './Auth/Auth-slicer'
import * as conSlicer from './Contacts/contacts-slicer';
import filterReducer from './Filter/filter-reducer';

const contactsReducer = combineReducers({
  items: conSlicer.itemsSlice.reducer,
  loading: conSlicer.loadingSlice.reducer,
  error: conSlicer.errorSlice.reducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'auth',
  storage
}

const persistedAuthReducer = persistReducer(persistConfig,authSlicer.authSlice.reducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistedAuthReducer
  },
});

export const persistor = persistStore(store)

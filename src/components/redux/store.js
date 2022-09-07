import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from './Contacts/contacts-reducer'
import filterReducer from './Filter/filter-reducer'
const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer
}) 

const persistConfig = {
  key: 'contacts',
  blacklist: 'filter',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedReducer
  }
})

export const persistor = persistStore(store)



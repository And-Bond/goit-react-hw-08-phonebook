import { configureStore, combineReducers } from "@reduxjs/toolkit";

import contactsReducer from './Contacts/contacts-reducer'
import filterReducer from './Filter/filter-reducer'
const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer
}) 

const store = configureStore({
  reducer: {
    contacts: rootReducer
  }
})

export default store;

import { addContact, removeContact } from "./contacts-action";
import {createReducer} from "@reduxjs/toolkit";

const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const reducer = createReducer(initialStore, {
    [addContact.type] : (store, {payload}) => [...store, payload],
    [removeContact.type] : (store, {payload}) => {
      const filteredContacts = store.filter(
                contact => contact.id !== payload
              );
              return filteredContacts
    }
})

export default reducer
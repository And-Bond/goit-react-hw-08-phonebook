import { createStore } from 'redux';
import { ADD_CONTACT, ADD_FILTER, REMOVE_CONTACT } from './types';

const initialStore = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...store.contacts.items, payload];
      return {
        contacts: {
          items: [...newContacts],
          filter: '',
        },
        
      };
      case ADD_FILTER: 
      return {
        contacts: {...store.contacts, filter: payload}
      }
      case REMOVE_CONTACT: 
      const filteredContacts = store.contacts.items.filter(contact => contact.id !== payload)
      return {
          contacts: {...store.contacts, items: filteredContacts}
      }
    default:
      return store;
  }
};

const store = createStore(reducer);

export default store;

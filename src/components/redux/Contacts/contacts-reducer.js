import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';

const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...store, payload];
      return newContacts
      
    case REMOVE_CONTACT:
      const filteredContacts = store.filter(
        contact => contact.id !== payload
      );
      return filteredContacts
      
    default:
      return store;
  }
};
export default reducer
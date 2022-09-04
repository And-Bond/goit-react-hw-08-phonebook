import React from 'react';
import ContactForm from './molecules/ContactForm/ContactForm';
import Filter from './molecules/Filter/Filter';
import ContactList from './molecules/ContactList/ContactList';
import styled from 'styled-components';
import {  shallowEqual, useSelector, useDispatch } from 'react-redux';
import { addContact, addFilter, removeContact } from './redux/actions';


export const App = () => {
  const contacts = useSelector(store => store.contacts.items, shallowEqual)
  const filter = useSelector(store => store.contacts.filter, shallowEqual)
  const dispatch = useDispatch()

  const onAddContact = (payload) => {
    const action = addContact(payload)
    dispatch(action)
  }

  const onFilterChange = e => {
    const action = addFilter(e.target.value)
    dispatch(action)
  };

  const onSubmit = (e, data) => {
    e.preventDefault();
    if (data.name === '' || data.number === '') {
      return;
    }
    const isInclude = contacts.find(({ name }) => name === data.name);
    if (isInclude) {
      alert(`${data.name} is already at contacts`);
    } else {
      console.log('fun works')
      onAddContact(data)
    }
  };
  const onDeleteClick = id => {
    const action = removeContact(id)
    dispatch(action)
  };
  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSubmit} />
        <h2>Contacts</h2>
        <Filter
          contacts={contacts}
          value={filter}
          onChange={onFilterChange}
          onDeleteClick={onDeleteClick}
        />
        <ListStyled>
          <ContactList
            filterValue={filter}
            contacts={contacts}
            onDeleteClick={onDeleteClick}
          />
        </ListStyled>
      </div>
  );
};

const ListStyled = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

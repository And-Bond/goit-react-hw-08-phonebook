import React from 'react';
import ContactForm from './molecules/ContactForm/ContactForm';
import Filter from './molecules/Filter/Filter';
import ContactList from './molecules/ContactList/ContactList';
import Loader from './atoms/Loader/Loader';
import styled from 'styled-components';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/Filter/filter-action';
import { getFetchedContacts, postContacts, removeContact } from 'redux/Contacts/contacts-operation';
import { useEffect } from 'react';


export const App = () => {
  const contacts = useSelector(store =>  {
    console.log(store.items)
    return store.items
  });
  const filter = useSelector(store =>  store.filter, shallowEqual);
  const loading = useSelector(store => store.loading, shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchedContacts())
  }, [dispatch])

  const onFilterChange = e => {
    console.log(e.target.value)
    const action = setFilter(e.target.value);
    dispatch(action);
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
      dispatch(postContacts(data))
    }
  };
  const onDeleteClick = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
    <h1>Phonebook</h1>
       <ContactForm onSubmit={onSubmit} />
       <h2>Contacts</h2>
       <Filter
        contacts={contacts}
        value={filter}
        onChange={onFilterChange}
        onDeleteClick={onDeleteClick}
      />
    {loading ? <Loader></Loader> : <div> 
      <ListStyled>
        <ContactList
          filterValue={filter}
          contacts={contacts}
          onDeleteClick={onDeleteClick}
        />
      </ListStyled>
    </div>}
    </>
  )
};

const ListStyled = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

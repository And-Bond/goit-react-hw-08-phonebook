import React from 'react';
import ContactForm from 'components/modules/ContactForm/ContactForm';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import ContactList from 'components/modules/ContactList/ContactList';
import Loader from 'components/modules/Loader/Loader';
import { setFilter } from 'redux/Filter/filter-action';
import style from './Contacts.module.css'
import {getFilter} from 'redux/Filter/filter-selectors';
import { getContacts, getLoading, getFilteredContacts, getContactsError } from 'redux/Contacts/contacts-selectors';
import {
  postContacts,
  removeContact,
  getFetchedContacts,
} from 'redux/Contacts/contacts-operation';
import { getLoginState } from 'redux/Auth/Auth-selectors';
import {useNavigate} from 'react-router-dom'

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const store = useSelector(store => store, shallowEqual)

  const contacts = getContacts(store)
  console.log(contacts);
  const loading = getLoading(store)
  const filter = getFilter(store)
  const filteredContacts = getFilteredContacts(store)
  const isLogin = getLoginState(store)
  const error = getContactsError(store)

  useEffect(() => {
    dispatch(getFetchedContacts());
    if(!isLogin){
      navigate('/login')
    }
  }, [dispatch, isLogin,navigate]);

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const onSubmit = (e, data) => {
    e.preventDefault();
    if (data.name === '' || data.number === '') {
      return;
    }
    const isInclude = contacts.find((contact) => contact?.name === data.name);
    if (isInclude) {
      alert(`${data.name} is already at contacts`);
    } else {
      dispatch(postContacts(data));
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
      <p className={style.pCon}>Find contacts by name</p>
            <input
            className={style.inputCon}
              type="text"
              name="filter"
              value={filter}
              onChange={onFilterChange}
            />
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
        {error && <div>{error}</div>}
          <ul className={style.ulCon}>
            <ContactList
              contacts={filteredContacts}
              onDeleteClick={onDeleteClick}
            />
          </ul>
          
        </>
      )}
    </>
  );

};

export default Contacts;

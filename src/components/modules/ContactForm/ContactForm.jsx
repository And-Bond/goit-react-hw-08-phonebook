import React, { useState } from 'react';
import proptypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const onChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
      return;
    }
    setNumber(e.target.value);
    return;
  };
  const onOwnSubmit = e => {
    const data = { name: name, number: number, id: nanoid() };
    setName('');
    setNumber('');
    onSubmit(e, data);
  };
  return (
    <>
      <form className={style.formCon} onSubmit={onOwnSubmit}>
        <p className={style.pCon}>Name</p>
        <input
          className={style.inputCon}
          type="text"
          name="name"
          onChange={onChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <p className={style.pCon}>Tel</p>

        <input
          className={style.inputCon}
          type="tel"
          name="number"
          onChange={onChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button className={style.buttonCon} type="submit">{'Add contact'}</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: proptypes.func,
};
export default ContactForm;

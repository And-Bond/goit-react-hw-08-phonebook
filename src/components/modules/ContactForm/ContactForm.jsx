import React, { useState } from 'react';
import proptypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const onChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
      return;
    }
    setPhone(e.target.value);
    return;
  };
  const onOwnSubmit = e => {
    const data = { name: name, phone: phone, id: nanoid() };
    setName('');
    setPhone('');
    onSubmit(e, data);
  };
  return (
    <>
      <form className={style.form} onSubmit={onOwnSubmit}>
        <p className={style.p}>Name</p>
        <input
          className={style.input}
          type="text"
          name="name"
          onChange={onChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <p className={style.p}>Tel</p>

        <input
          className={style.input}
          type="tel"
          name="number"
          onChange={onChange}
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button className={style.button} type="submit">{'Add contact'}</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: proptypes.func,
};
export default ContactForm;

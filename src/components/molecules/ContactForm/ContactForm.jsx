import React, { useState } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import ControlledInput from '../../atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { nanoid } from 'nanoid';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const onChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setPhone(e.target.value);
    }
  };
  const onOwnSubmit = (e ) => {
        const data = {name: name, phone: phone, id: nanoid()}
        setName('')
        setPhone('')
        onSubmit(e,data)
      }
  return (
    <>
      <FormStyled onSubmit={onOwnSubmit}>
        <PStyled>Name</PStyled>
        <ControlledInput
          type="text"
          name="name"
          onChange={onChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <PStyled>Tel</PStyled>
        <ControlledInput
          type="tel"
          name="number"
          onChange={onChange}
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button type="submit" btnText="Add contact"></Button>
      </FormStyled>
    </>
  );
};

const PStyled = styled.p`
  display: inline;
  margin: 0;
`;
const FormStyled = styled.form`
  margin-left: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid black;
  width: 500px;
  height: 250px;
`;

Form.propTypes = {
  onSubmit: proptypes.func,
};
export default Form;

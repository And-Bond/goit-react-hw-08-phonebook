import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import ControlledInput from '../../atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

class Form extends Component {
  state={
    name: ""
  }
  render() {
    const {telName, textName, onChange, onSubmit, textValue, telValue } = this.props;
    return (
      <>
        <form onSubmit={onSubmit}>
          <p>Name</p>
          <ControlledInput type="text" name='name' onChange={(e) => onChange(e, this.state.name)} value={textValue} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
          <ControlledInput type="tel" name='number' onChange={onChange} value={telValue} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
          <Button type="submit" btnText="Add contact"></Button>
        </form>
      </>
    );
  }
}

export default Form;

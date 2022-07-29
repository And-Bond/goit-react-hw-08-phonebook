import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import ControlledInput from '../../atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

class Form extends Component {
  render() {
    const { name, onChange, onSubmit, value } = this.props;
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={onSubmit}>
          <p>Name</p>
          <ControlledInput type="text" name={name} onChange={onChange} value={value} />
          <Button type="submit" btnText="Add contact"></Button>
        </form>
      </>
    );
  }
}

export default Form;

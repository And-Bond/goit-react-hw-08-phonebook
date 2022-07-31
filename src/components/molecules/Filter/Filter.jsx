import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';

class Filter extends Component {
  render() {
    const { value, onChange, contacts } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <Input type="text" name="filter" value={value} onChange={onChange} />

          {contacts.map(contact => {
            if(!value){
                return;
            }
            const lowerContact = contact.name.toLowerCase();
            if (lowerContact.includes(value.toLowerCase())) {
                return <li key={contact.name + contact.number}>
                {contact.name}: {contact.number}
              </li>
              }
          })}
      </>
    );
  }
}

export default Filter;

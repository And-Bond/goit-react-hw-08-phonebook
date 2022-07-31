import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';

class Contacts extends Component {
  render() {
    const { contacts, value, onChange, filterValue } = this.props;
    return (
      <>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Input type="text" name="filter" value={value} onChange={onChange} />
        <ul>
          {contacts?.map(contact => {
            const lowerContact = contact.name.toLowerCase();
            const markup = <li key={contact.name + contact.number}>
            {contact.name}: {contact.number}
          </li>;
            if (!filterValue) {
              return markup
            }
            if (lowerContact.includes(filterValue.toLowerCase())) {
              return markup
            }
          })}
        </ul>
      </>
    );
  }
}

export default Contacts;

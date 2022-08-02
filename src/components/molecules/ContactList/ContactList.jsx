import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';

class Contacts extends Component {

  render() {
    const { contacts, filterValue, onDeleteClick } = this.props;
    
    return (
      <>
        {contacts.map(contact => {
          if (filterValue) {
            return;
          }
          return (
            <li key={contact.name + contact.number}>
              {contact.name}: {contact.number}
              <button onClick={onDeleteClick} type='click' name={contact.name}>Delete</button>
            </li>
          );
        })}
      </>
    );
  }
}

export default Contacts;

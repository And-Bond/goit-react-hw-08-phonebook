import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        <h2>Contacts</h2>
        <ul>
            {contacts?.map(contact => {
                return <li key={contact}>{contact}</li>
            })}
        </ul>
      </>
    );
  }
}

export default Contacts;

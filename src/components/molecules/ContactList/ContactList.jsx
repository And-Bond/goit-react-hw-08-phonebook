import React from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';


const Contacts = ({ contacts, filterValue, onDeleteClick}) => {
  return (
          <>
            {contacts?.map(contact => {
              if (filterValue) {
                return null;
              }
              return (
                <li key={contact.name + contact.phone}>
                  {contact.name}: {contact.phone}
                  <ButtonStyled onClick={() => onDeleteClick(contact.id)} type='click' name={contact.name}>Delete</ButtonStyled>
                </li>
              );
            })}
          </>
        );
}

const ButtonStyled = styled.button`
  width: 100px;
  border: 1px solid gray;
  border-radius: 15%;
  height: 35px;
  margin-left: 10px;
  color: black;
  font-weight: 800;
  background-color: #fff;
`
Contacts.propTypes = {
  contacts: proptypes.array,
  filterValue: proptypes.string
}

export default Contacts;

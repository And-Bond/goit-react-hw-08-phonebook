import React from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Filter = ({ value, onChange, onDeleteClick }) => {
  const contacts = useSelector(store => store.contacts.items)
  const filter = useSelector(store => store.contacts.filter)
  const onOwnDeleteClick = (contactId) => {
        onDeleteClick(contactId)
      }
      const filteredItems = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
      console.log(filteredItems)
  return (
          <>
            <PStyled>Find contacts by name</PStyled>
            <InputStyled
              type="text"
              name="filter"
              value={value}
              onChange={onChange}
            />
    
            {filteredItems.map(contact => {
              if (!value) {
                return null;
              }
              console.log(contact)
              return (
                    <LiStyled key={contact.id}>
                      {contact.name}: {contact.number}
                      <ButtonStyled
                        onClick={() => onOwnDeleteClick(contact.id)}
                        type="click"
                        name={contact.name}
                      >
                        Delete
                      </ButtonStyled>
                    </LiStyled>
                  );
            })}
          </>
        );
}

const PStyled = styled.p`
  display: inline;
  margin-left: 10px;
`;
const ButtonStyled = styled.button`
  width: 100px;
  border: 1px solid gray;
  border-radius: 15%;
  height: 35px;
  margin-left: 10px;
  color: black;
  font-weight: 800;
  background-color: #fff;
`;
const InputStyled = styled.input`
  width: 200px;
  height: 25px;
  margin-left: 10px;
  display: block;
  margin-top: 10px;
`;
const LiStyled = styled.li`
  margin-left: 10px;
`;
Filter.propTypes = {
  contacts: proptypes.array,
  value: proptypes.string,
  onChange: proptypes.func,
};

export default Filter;

import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';

class Filter extends Component {
  onDeleteClick = e => {
    this.props.onDeleteClick(e, e.target.name);
  };
  render() {
    const { value, onChange, contacts } = this.props;
    return (
      <>
        <PStyled>Find contacts by name</PStyled>
        <InputStyled
          style={{ marginLeft: '10px' }}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />

        {contacts.map(contact => {
          if (!value) {
            return null;
          }
          const lowerContact = contact.name.toLowerCase();
          if (lowerContact.includes(value.toLowerCase())) {
            return (
              <LiStyled key={contact.name + contact.number}>
                {contact.name}: {contact.number}
                <ButtonStyled
                  onClick={this.onDeleteClick}
                  type="click"
                  name={contact.name}
                >
                  Delete
                </ButtonStyled>
              </LiStyled>
            );
          }
        })}
      </>
    );
  }
}

const PStyled = styled.p`
  display: inline;
  margin-left: 10px;
`
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
const InputStyled = styled.input`
  width: 200px;
  height: 25px;
  margin-left: 10px;
  display: block;
  margin-top:10px;
`;
const LiStyled = styled.li`
  margin-left: 10px;
`
Filter.propTypes = {
  contacts: proptypes.object,
  value: proptypes.string,
  onChange: proptypes.func,
};

export default Filter;

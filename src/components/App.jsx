
import React, { Component } from 'react';
import ContactForm from './molecules/ContactForm/ContactForm';
import Filter from './molecules/Filter/Filter';
import ContactList from './molecules/ContactList/ContactList';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount(){
    const load = key => {
      try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
      } catch (err) {
        console.error('Get state error: ', err);
      }
    };
    this.setState({
      contacts: load('contacts')
    })
  }
  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  onSubmit = (e, data) => {
    let isInclude = false;
    e.preventDefault();
    if (data.name === '' || data.number === '') {
      return;
    }
    this.state.contacts.map(contact => {
      if (contact.name === data.name) {
        alert(`${data.name} is already at contacts`);
        return (isInclude = true);
      }
      return null
    });
    if (!isInclude) {
      this.setState({
        contacts: [
          ...this.state.contacts,
          { name: data.name, number: data.number, id: nanoid() },
        ],
      });
      console.log(this.state.contacts)
      setTimeout(() => {
        console.log(this.state.contacts)
        return localStorage.setItem('contacts', JSON.stringify(this.state.contacts))},1000)
    }
  };
  onDeleteClick = (e, data) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.name !== data;
      }),
    });
    setTimeout(() => { return localStorage.setItem('contacts', JSON.stringify(this.state.contacts))}, 1000)
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          value={this.state.filter}
          onChange={this.onFilterChange}
          onDeleteClick={this.onDeleteClick}
        />
        <ListStyled>
          <ContactList
            filterValue={this.state.filter}
            contacts={this.state.contacts}
            onDeleteClick={this.onDeleteClick}
          />
        </ListStyled>
      </div>
    );
  }
}


const ListStyled = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
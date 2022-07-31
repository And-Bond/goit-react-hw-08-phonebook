import React, { Component } from 'react';
import Form from './molecules/Form/Form';
import Contacts from './molecules/Contacts/Contacts';
import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  onChange = (e) => {
   this.setState({
    [e.target.name]: e.target.value
   })
  }
  onFilterChange = (e) =>{
    this.setState({
      filter: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.name === "" || this.state.number === ""){
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, {name: this.state.name, number: this.state.number, id: nanoid()}],
      name: "",
      number: ""
    })
    
  }
  render() {
    return (
      <>
        <Form telName={this.state.number} textName={this.state.name} onChange={this.onChange} onSubmit={this.onSubmit} textValue={this.state.name} telValue={this.state.number}></Form>
        <Contacts onChange={this.onFilterChange} filterValue={this.state.filter} value={this.state.filter} contacts={this.state.contacts}></Contacts>
      </>
    );
  }
}

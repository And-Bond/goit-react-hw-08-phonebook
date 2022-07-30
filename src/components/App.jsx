import React, { Component } from 'react';
import Form from './molecules/Form/Form';
import Contacts from './molecules/Contacts/Contacts';
import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  onChange = (e) => {
   this.setState({
    [e.target.name]: e.target.value
   })
   console.log(e.target)
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      contacts: [...this.state.contacts, {name: this.state.name, number: this.state.number, id: nanoid()}],
      name: "",
      number: ""
    })
    
  }
  render() {
    console.log(this.state.contacts)
    return (
      <>
        <Form telName={this.state.number} textName={this.state.name} onChange={this.onChange} onSubmit={this.onSubmit} textValue={this.state.name} telValue={this.state.number}></Form>
        <Contacts contacts={this.state.contacts}></Contacts>
      </>
    );
  }
}

import React, { Component } from 'react';
import Form from './molecules/Form/Form';
import Contacts from './molecules/Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  onChange = (e) => {
   this.setState({
    name: e.target.value
   })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      contacts: [...this.state.contacts, this.state.name],
      name: ""
    })
    
    console.log(this.state.contacts)
  }
  render() {
    return (
      <>
        <Form name={this.state.name} onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.name}></Form>
        <Contacts contacts={this.state.contacts}></Contacts>
      </>
    );
  }
}

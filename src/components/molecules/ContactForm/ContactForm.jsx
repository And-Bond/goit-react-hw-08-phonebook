import React, { Component } from 'react';
import proptypes from 'prop-types';
import styled from 'styled-components';
import ControlledInput from '../../atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

class Form extends Component {
  state={
    name: "",
    number: ""
  }
  shouldComponentUpdate(prevProps, prevState){
    if(prevProps !== this.props || prevState !== this.state){
      return true
    }
    return false
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = (e ) => {
    const data = {name: this.state.name, number: this.state.number}
    this.setState({
      name: "",
      number: ""
    })
    this.props.onSubmit(e,data)
  }
  render() {
    return (
      <>
        <FormStyled onSubmit={this.onSubmit}>
          <PStyled>Name</PStyled>
          <ControlledInput type="text" name='name' onChange={this.onChange} value={this.state.name} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
          <PStyled>Tel</PStyled>
          <ControlledInput type="tel" name='number' onChange={this.onChange} value={this.state.number} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
          <Button type="submit" btnText="Add contact"></Button>
        </FormStyled>
      </>
    );
  }
}
const PStyled = styled.p`
  display: inline;
  margin: 0;
`
const FormStyled = styled.form`
  margin-left: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid black;
  width: 500px;
  height: 250px;
`

Form.propTypes = {
  onSubmit: proptypes.func
}
export default Form;

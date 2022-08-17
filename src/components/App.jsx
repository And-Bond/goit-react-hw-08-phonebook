import React, { useState } from 'react';
import ContactForm from './molecules/ContactForm/ContactForm';
import Filter from './molecules/Filter/Filter';
import ContactList from './molecules/ContactList/ContactList';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export const App = () => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState([...defaultContacts]);
  const [filter, setFilter] = useState('');

  const onFilterChange = e => {
    setFilter(e.target.value);
  };
  const onSubmit = (e, data) => {
    e.preventDefault();
    if (data.name === '' || data.number === '') {
      return;
    }
    const isInclude = contacts.find(({ name }) => name === data.name);
    if (isInclude) {
      alert(`${data.name} is already at contacts`);
    } else {
      setContacts(prevContacts => {
        return [
          ...prevContacts,
          { name: data.name, number: data.number, id: nanoid() },
        ];
      });
    }
  };
  const onDeleteClick = id => {
    setContacts(prevContacts => {
      const filteredContacts = prevContacts.filter(contact => {
        return contact.id !== id;
      });
      return [...filteredContacts];
    });
  };
  return (
    
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter
        contacts={contacts}
        value={filter}
        onChange={onFilterChange}
        onDeleteClick={onDeleteClick}
      />
      <ListStyled>
        <ContactList
          filterValue={filter}
          contacts={contacts}
          onDeleteClick={onDeleteClick}
        />
      </ListStyled>
    </div>
  );
};
// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   onFilterChange = e => {
//     this.setState({
//       filter: e.target.value,
//     });
//   };
//   onSubmit = (e, data) => {
//     e.preventDefault();
//     if (data.name === '' || data.number === '') {
//       return;
//     }
//     const isInclude = this.state.contacts.find(({name}) => name === data.name)
//     if (isInclude) {
//       alert(`${data.name} is already at contacts`)
//     }
//     else{
//       this.setState({
//         contacts: [
//           ...this.state.contacts,
//           { name: data.name, number: data.number, id: nanoid() },
//         ],
//       });
//     }
//   };
//   onDeleteClick = ( id) => {
//     this.setState({
//       contacts: this.state.contacts.filter(contact => {
//         return contact.id !== id;
//       }),
//     });

//   };
//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.onSubmit} />

//         <h2>Contacts</h2>
//         <Filter
//           contacts={this.state.contacts}
//           value={this.state.filter}
//           onChange={this.onFilterChange}
//           onDeleteClick={this.onDeleteClick}
//         />
//         <ListStyled>
//           <ContactList
//             filterValue={this.state.filter}
//             contacts={this.state.contacts}
//             onDeleteClick={this.onDeleteClick}
//           />
//         </ListStyled>
//       </div>
//     );
//   }
// }

const ListStyled = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

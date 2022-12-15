// import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState(
    JSON.parse(window.localStorage.getItem('filter')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    window.localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  const formSubmitHandler = data => {
    const isExist = contacts.find(contact => {
      return data.name === contact.name;
    });
    if (isExist) {
      return alert(`${data.name} is already in contacts.`);
    }
    setContacts(data);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
    console.log(filter);
  };
  // const formSubmitHandler = data => {
  //   const isExist = contacts.find(contact => {
  //     return data.name === contact.name;
  //   });
  //   if (isExist) {
  //     return alert(`${data.name} is already in contacts.`);
  //   }
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, data],
  //   }));
  // };

  const contactsQuantity = contacts.length;
  console.log(contactsQuantity);
  // const { filter } = this.state;
  // const visibleContacts = this.updateContacts();
  return (
    <>
      <h1
        style={{
          margin: 15,
        }}
      >
        Phonebook
      </h1>
      <Form contacts={contacts} onSubmit={formSubmitHandler} />
      <h2
        style={{
          margin: 15,
        }}
      >
        Contacts
      </h2>
      <Filter value={filter} onChange={changeFilter} />
      {contactsQuantity > 0 ? (
        <ContactsList
          contacts={contacts}
          // deleteContact={this.deleteContact}
        />
      ) : (
        <span
          style={{
            margin: 15,
          }}
        >
          There is no contacts yet
        </span>
      )}
    </>
  );
}

// const INITIAL_STATE = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };
// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   formSubmitHandler = data => {
//     const isExist = this.state.contacts.find(contact => {
//       return data.name === contact.name;
//     });
//     if (isExist) {
//       return alert(`${data.name} is already in contacts.`);
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, data],
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//     console.log(this.state.filter);
//   };

//   updateContacts = () => {
//     const filterWord = this.state.filter.toLowerCase().trim();
//     return this.state.contacts.filter(({ name }) => {
//       return name.toLowerCase().includes(filterWord);
//     });
//   };

//   deleteContact = deleteId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== deleteId),
//     }));
//   };

//   render() {
//     const contactsQuantity = this.state.contacts.length;
//     console.log(contactsQuantity);
//     const { filter } = this.state;
//     const visibleContacts = this.updateContacts();
//     return (
//       <>
//         <h1
//           style={{
//             margin: 15,
//           }}
//         >
//           Phonebook
//         </h1>
//         <Form options={this.state} onSubmit={this.formSubmitHandler} />
//         <h2
//           style={{
//             margin: 15,
//           }}
//         >
//           Contacts
//         </h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         {contactsQuantity > 0 ? (
//           <ContactsList
//             contacts={visibleContacts}
//             deleteContact={this.deleteContact}
//           />
//         ) : (
//           <span
//             style={{
//               margin: 15,
//             }}
//           >
//             There is no contacts yet
//           </span>
//         )}
//       </>
//     );
//   }
// }

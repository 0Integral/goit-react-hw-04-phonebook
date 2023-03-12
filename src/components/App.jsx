import { useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from './localStorage/localStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const trackInputFilter = event => {
    setFilter(event.target.value);
  };

  const filterListName = () => {
    const normalizeName = filter.toLocaleLowerCase();
    return contacts.filter(el => el.name.toLowerCase().includes(normalizeName));
  };

  const handlDelete = event => {
    const { id } = event.target;
    setContacts(contacts.filter((el, i) => i !== Number(id)));
  };

  return (
    <div
      style={{
        margin: '20px 40px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filterName={trackInputFilter} />
      <Contacts contactsInfo={filterListName} onDelete={handlDelete} />
    </div>
  );
};

import {useEffect, useState } from "react";
import { ContactForm } from "./form/Form";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Layout } from "./Layout.styled";
import { nanoid } from "nanoid";
export const App = () => {
const array  = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [filter, setFilter] = useState(''); 
 const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? array
  );
  useEffect(() => { localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

 

   function searchContact (contactName) {
        setFilter(contactName)
   }
    function deleteContact(contactId) {
        setContacts(prevContacts =>  prevContacts.filter(contact => contact.id !== contactId));
    }
  const visibleContacts = () => {
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
    function addContact(newContact){
    const oldContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!oldContact) {
      setContacts(prevContacts => 
        [...prevContacts, { id: nanoid(), ...newContact }],
      );
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  };
  
    return (
    <Layout>
    <ContactForm onAddContact={addContact}/>
    <Filter filter={filter} onSearchContact={searchContact} />
    <ContactList contacts={visibleContacts()} onDelete={deleteContact}/>
    </Layout>
    
    )}



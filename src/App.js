import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    if (this.checkContactName(contacts, name)) {
      alert(`${name} is alredy i contacts`);
    } else {
      const contact = { id: uuidv4(), name: name, number: number };
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  checkContactName = (contacts, name) => {
    return contacts.some((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <section className="container">
        <h1>Phonebook</h1>
        <ContactsForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onRemoveContact={this.removeContact}
        />
      </section>
    );
  }
}

export default App;

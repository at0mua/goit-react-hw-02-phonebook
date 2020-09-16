import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

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

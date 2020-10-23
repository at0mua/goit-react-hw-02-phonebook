import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import { v4 as uuidv4 } from "uuid";
import AppBar from "./components/AppBar/AppBar";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";

import translate from "./animation/translate.module.scss";
// import logo from "./animation/logo.module.scss";

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
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    const isShowFilter = contacts.length > 1;

    return (
      <>
        {/* <CSSTransition
          in={true}
          appear
          timeout={2500}
          classNames={logo}
          unmountOnExit
        >
          <AppBar title="Phonebook" />
        </CSSTransition> */}
        <AppBar title="Phonebook" />

        <section className="container">
          <ContactsForm onAddContact={this.addContact} />

          <CSSTransition
            in={isShowFilter}
            classNames={translate}
            timeout={250}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </CSSTransition>

          <ContactsList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        </section>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import { v4 as uuidv4 } from "uuid";
import AppBar from "../AppBar/AppBar";
import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import Message from "../Message/Message";

import s from "./App.module.scss";
import scale from "../../animation/scale.module.scss";
import translateR from "../../animation/translateRight.module.scss";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    message: false,
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
      this.setState({ message: true });
      setTimeout(() => {
        this.resetMessageStatus();
      }, 1500);
    } else {
      const contact = { id: uuidv4(), name: name, number: number };
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
          message: false,
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

  resetMessageStatus = () => {
    this.setState({
      message: false,
    });
  };

  render() {
    const { contacts, filter, message } = this.state;

    const visibleContacts = this.getVisibleContacts();
    const isShowFilter = contacts.length > 1;
    const isShowContacts = visibleContacts.length > 0;

    return (
      <>
        <AppBar title="Phonebook" />

        <CSSTransition
          in={message}
          classNames={translateR}
          timeout={250}
          unmountOnExit
        >
          <Message />
        </CSSTransition>

        <section className="container">
          <ContactsForm onAddContact={this.addContact} />

          <CSSTransition
            in={isShowFilter}
            classNames={scale}
            timeout={250}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </CSSTransition>

          <ContactsList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
          {!isShowContacts && (
            <p className={s.message}>You have no contacts. Try to add new.</p>
          )}
        </section>
      </>
    );
  }
}

export default App;

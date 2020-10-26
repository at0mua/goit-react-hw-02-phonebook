import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import AppBar from "../AppBar/AppBar";
import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import PhonebookActions from "../../redux/PnhonebookActions";

import scale from "../../animation/scale.module.scss";

class App extends Component {
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.props.addFromLocal(JSON.parse(persistedContacts));
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.props.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
    }
  }

  render() {
    const { contacts } = this.props;

    const isShowFilter = contacts.length > 1;

    return (
      <>
        <AppBar title="Phonebook" />

        <section className="container">
          <ContactsForm />

          <CSSTransition
            in={isShowFilter}
            classNames={scale}
            timeout={250}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>

          <ContactsList />
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebook.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFromLocal: (contacts) =>
      dispatch(PhonebookActions.fromLocalSorage(contacts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import AppBar from '../AppBar/AppBar';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import PhonebookOperation from '../../redux/PhonebookOperation';

import scale from '../../animation/scale.module.scss';

class App extends Component {
  componentDidMount() {
    this.props.onGetContacts();
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

          {this.props.loading && <h3>Please wait. Loading...</h3>}

          <ContactsList />
        </section>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { contacts, loading } = state.phonebook;
  return {
    contacts,
    loading,
  };
};

const mapDispatchToProps = {
  onGetContacts: PhonebookOperation.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

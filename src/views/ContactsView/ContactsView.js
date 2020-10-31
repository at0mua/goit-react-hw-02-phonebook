import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ContactsForm from '../../components/ContactsForm/ContactsForm';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import { PhonebookOperation, PhonebookSelectors } from '../../redux/Phonebook/';
// import { authSelectors } from '../../redux/auth';

import s from './ContactsView.module.scss';
import scale from '../../animation/scale.module.scss';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    const { contacts, loading } = this.props;
    const isShowFilter = contacts.length > 1;

    return (
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

        {loading && <h3 className={s.loading}>Please wait. Loading...</h3>}

        <ContactsList />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contacts: PhonebookSelectors.getContacts(state),
  loading: PhonebookSelectors.getLoading(state),
  // isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onGetContacts: PhonebookOperation.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);

import React from 'react';
import { CSSTransition } from 'react-transition-group';

import AppBar from '../AppBar/AppBar';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

import s from './App.module.scss';
import scale from '../../animation/scale.module.scss';

function App({ contacts, loading }) {
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

        {loading && <h3 className={s.loading}>Please wait. Loading...</h3>}

        <ContactsList />
      </section>
    </>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import ContactListItem from './ContactsListItemContainer';
import PhonebookSelectors from '../../redux/PhonebookSelectors';

import s from './ContactsList.module.scss';
import translateL from '../../animation/translateLeft.module.scss';

const ContactsList = ({ contacts }) => {
  const contactsId = contacts.map(contact => contact.id);
  return (
    <>
      <TransitionGroup component="ul" className={s.contactList}>
        {contactsId.map(id => (        
          <CSSTransition key={id} timeout={250} classNames={translateL}>
            <ContactListItem key={id} id={id} name={name} number={number} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {!(contacts.length > 0) && (
        <p className={s.message}>You have no contacts. Try to add new.</p>
      )}
    </>
  );
};

ContactsList.propTpes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
  ),
};

const mapStateToProps = state => ({
  contacts: PhonebookSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactsList);

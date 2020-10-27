import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import ContactListItem from "./ContactsListItem";

import s from "./ContactsList.module.scss";
import translateL from "../../animation/translateLeft.module.scss";

const ContactsList = ({ contacts }) => {
  return (
    <>
      <TransitionGroup component="ul" className={s.contactList}>
        {contacts.map(({ id }) => (
          <CSSTransition key={id} timeout={250} classNames={translateL}>
            <ContactListItem key={id} id={id} />
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
    })
  ),
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.phonebook;

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactsList);

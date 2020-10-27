import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import PhonebookActions from "../../redux/PnhonebookActions";
import ContactListItem from "./ContactsListItem";

import s from "./ContactsList.module.scss";
import translateL from "../../animation/translateLeft.module.scss";

const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <TransitionGroup component="ul" className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={translateL}>
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onRemoveContact={() => onRemoveContact(id)}
            />
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
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
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

const mapDispatchToProps = {
  onRemoveContact: PhonebookActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

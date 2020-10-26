import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import PhonebookActions from "../../redux/PnhonebookActions";
import ContactListItem from "./ContactsListItem";

import s from "./ContactsList.module.scss";
import translateL from "../../animation/translateLeft.module.scss";

const ContactsList = ({ contacts, filter, onRemoveContact }) => {
  function getVisibleContacts() {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  const visibleContacts = getVisibleContacts();
  const isShowContacts = visibleContacts.length > 0;

  return (
    <>
      <TransitionGroup component="ul" className={s.contactList}>
        {visibleContacts.map(({ id, name, number }) => (
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
      {!isShowContacts && (
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
  return {
    contacts: state.phonebook.contacts,
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = {
  onRemoveContact: PhonebookActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactListItem from "./ContactsListItem";
import s from "./ContactsList.module.scss";
import translateL from "../../animation/translateLeft.module.scss";

const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
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

export default ContactsList;

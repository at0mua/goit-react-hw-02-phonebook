import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "./ContactsListItem";

const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemoveContact={() => onRemoveContact(id)}
        />
      ))}
    </ul>
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

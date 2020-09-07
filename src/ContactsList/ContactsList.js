import React from "react";

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

export default ContactsList;

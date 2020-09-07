import React from "react";

const ContactsListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li>
      <p>
        <span>{name}: </span>
        <span>{number}</span>
      </p>
      <button type="button" onClick={onRemoveContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;

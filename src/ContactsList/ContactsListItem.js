import React from "react";
import PropTypes from "prop-types";

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

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactsListItem;

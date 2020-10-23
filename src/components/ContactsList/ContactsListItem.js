import React from "react";
import PropTypes from "prop-types";

import s from "./ContactsListItem.module.scss";

const ContactsListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={s.contactsList_item}>
      <p className={s.contactsList_item__name}>{name}:</p>
      <p className={s.contactsList_item__number}>{number}</p>
      <button
        type="button"
        className={s.contactsList_item__btn}
        onClick={onRemoveContact}
      >
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

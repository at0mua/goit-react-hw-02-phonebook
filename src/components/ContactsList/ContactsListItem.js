import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhonebookOperation from '../../redux/PhonebookOperation';

import s from './ContactsListItem.module.scss';

const ContactsListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={s.contactsList_item}>
      <p className={s.contactsList_item__name}>{name}</p>
      <p className={s.contactsList_item__number}>{number}</p>
      <button
        type="button"
        className={s.contactsList_item__btn}
        onClick={onRemoveContact}
      >
        ×
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),

  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.phonebook.contacts.find(item => item.id === ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(PhonebookOperation.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);

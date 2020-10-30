import { connect } from 'react-redux';

import ContactsListItem from './ContactsListItem';
import PhonebookOperation from '../../redux/Phonebook/PhonebookOperation';
import PhonebookSelectors from '../../redux/Phonebook/PhonebookSelectors';

const mapStateToProps = (state, ownProps) => {
  const contact = PhonebookSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(PhonebookOperation.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);

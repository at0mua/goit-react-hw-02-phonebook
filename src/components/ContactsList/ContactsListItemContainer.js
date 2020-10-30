import { connect } from 'react-redux';

import ContactsListItem from './ContactsListItem';
import PhonebookOperation from '../../redux/PhonebookOperation';
import PhonebookSelectors from '../../redux/PhonebookSelectors';

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

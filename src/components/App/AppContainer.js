import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import PhonebookOperation from '../../redux/PhonebookOperation';
import PhonebookSelectors from '../../redux/PhonebookSelectors';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => ({
  contacts: PhonebookSelectors.getContacts(state),
  loading: PhonebookSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onGetContacts: PhonebookOperation.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

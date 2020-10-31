import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

const withAuth = WrapperComponnent => {
  function WhithAuth(props) {
    return <WrapperComponnent {...props} />;
  }

  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });

  return connect(mapStateToProps)(WhithAuth);
};

export default withAuth;

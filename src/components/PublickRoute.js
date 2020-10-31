import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import whithAuth from './hoc/whithAuth';
// import { authSelectors } from '../redux/auth';

const PublickRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default whithAuth(PublickRoute);

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.isAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublickRoute);

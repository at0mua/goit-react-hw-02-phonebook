import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import whithAuth from './hoc/whithAuth';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default whithAuth(PrivateRoute);

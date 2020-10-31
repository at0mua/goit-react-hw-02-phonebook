import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from '../PrivateRoute';
import PublickRoute from '../PublickRoute';
import { authOperations } from '../../redux/auth';
import AppBar from '../AppBar/AppBar';
import routes from '../../routes/routes';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <AppBar title="Phonebook" />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublickRoute key={route.label} {...route} />
              ),
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);

import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import AppBar from '../AppBar/AppBar';
import routes from '../../routes';
// import { authOperations } from '../redux/auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppBar title="Phonebook" />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;

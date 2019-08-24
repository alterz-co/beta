import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

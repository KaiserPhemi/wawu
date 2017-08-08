import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/"/>
        <Route  exact path="/login"/>
      </Switch>
    </Router>
  </Provider>
);

export default Root;

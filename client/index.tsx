import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes/routes';
import store from './store/store';


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);

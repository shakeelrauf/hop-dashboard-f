import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './assets/css/material-dashboard-react.css';
import { Auth } from './layouts/Auth';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
        <Route path='/' component={Auth} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

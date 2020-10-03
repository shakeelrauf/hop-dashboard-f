import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import  store from './store';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import { Router, Switch, Redirect , Route} from "react-router-dom";

import "./assets/css/material-dashboard-react.css";
import { Main } from './layouts/Main';

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path='/main' component={Main} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

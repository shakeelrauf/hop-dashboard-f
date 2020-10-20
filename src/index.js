import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './assets/css/material-dashboard-react.css';
import Main from './layouts/Main';
import Auth from './layouts/Auth';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

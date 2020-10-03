import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer/Footer.js';
import routes from '../routes.js';
import styles from '../assets/jss/material-dashboard-react/layouts/adminStyle.js';
import '../assets/css/styles.css';

import {
  Grid,
  AppBar,
  Typography,
  Toolbar,
} from '@material-ui/core';
import {BRAND_NAME} from '../services/constants';


let ps;
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/main') {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/" to="/new"/>
  </Switch>
);

const useStyles = makeStyles(styles);

export function Main ({ ...rest }) {
  const classes = useStyles();
  const mainPanel = React.createRef();

  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = 'hidden';
    }
    return function cleanup () {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
    };
  }, [mainPanel]);

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap" className={classes.container}>
            <Grid item>
              <Typography variant="h6">{BRAND_NAME}</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {switchRoutes}
      <Footer />
    </div>
  );
};

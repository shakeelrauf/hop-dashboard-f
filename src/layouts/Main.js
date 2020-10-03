import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer/Footer.js';
import routes from '../routes.js';
import styles from '../assets/jss/material-dashboard-react/layouts/adminStyle.js';
import TypographyPage from '../views/Typography/Typography.js';

let ps;
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/main') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Route
      path='/main/typography'
      component={TypographyPage}
    />
    <Redirect from="/main" to="/main/typography" />
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
    <div className={classes.wrapper}>
      <div className={classes.map}>{switchRoutes}</div>
      <Footer />
    </div>
  );
};

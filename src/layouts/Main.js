import React, { useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from '../routes.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrivateRoute from '../Utils/PrivateRoute';
import useStyles  from '../components/Layouts/Main/styles';
import Sidebar from '../components/Layouts/Main/Sidebar';
import Header from '../components/Layouts/Main/Header';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/main') {
        return (
          <PrivateRoute
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/" to="/index"/>
  </Switch>
);



export default function Main() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle}></Header>
      <Sidebar 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle}></Sidebar>
      <main className={classes.content}>
        {switchRoutes}
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

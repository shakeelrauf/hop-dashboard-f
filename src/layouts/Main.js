import React, { useState } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from '../routes.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import PrivateRoute from '../Utils/PrivateRoute';
import useStyles  from '../components/Layouts/Main/styles';
import Sidebar from '../components/Layouts/Main/Sidebar';
import Header from '../components/Layouts/Main/Header';
import { customLightTheme, customDarkTheme } from '../config/CustomTheme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Toasts from '../components/common/Toasts';

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
    <Redirect from="/" to="/dashboard"/>
  </Switch>
);


const themeLight = createMuiTheme({
  palette: customLightTheme,
  spacing: 4
});
const themeDark = createMuiTheme({
  palette: customDarkTheme
});

export default function Main() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [light] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <Header 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={handleDrawerToggle}></Header>
        <Grid container item xs={12} md={12} sm={12} lg={12}> 
          <Grid item lg={2} xs={12} md={3} sm={3}>
            <Sidebar 
              mobileOpen={mobileOpen} 
              handleDrawerToggle={handleDrawerToggle}></Sidebar>
          </Grid>
          <Grid item lg={10} md={9} sm={9} className={classes.content} xs={12}>
            {switchRoutes}
            <div className={classes.toolbar} />
          </Grid>
          <Toasts />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

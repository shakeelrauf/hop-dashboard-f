import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from '../routes.js';
import SmallText from '../components/Typography/SmallText';
import { Switch, Redirect } from 'react-router-dom';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { Box, Grid, Link } from '@material-ui/core';
import { customLightTheme, customDarkTheme } from '../config/CustomTheme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useStyles } from '../assets/jss/material';
import '../assets/css/styles.css';
import 'fontsource-roboto';
import PublicRoute from '../Utils/PublicRoute';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return (
        <PublicRoute
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
    <Redirect from="/auth" to="/auth/login"/>
    <Redirect from="/login" to="/auth/login"/>
    <Redirect from="" to="/auth/login"/>
  </Switch>
);

const themeLight = createMuiTheme({
  palette: customLightTheme,
  spacing: 4
});
themeLight.spacing(2);
const themeDark = createMuiTheme({
  palette: customDarkTheme
});

export default function Auth ({ ...rest }) {
  const classes = useStyles();
  const [light] = React.useState(true);

  return (
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline/>
      <Grid container 
        justify="center"
        spacing={1}
        alignItems="center"
        direction="column"
        className={classes.root} >
        <Grid 
          mx="auto"
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Box mt={7} mb={7} pt={3}>
            <img alt="logo" className={classes.logo} src={require('../assets/img/logo@3x.png')}/>
          </Box>
        </Grid>
        <Grid item 
          xs={12} sm={8}>
          <Grid className={classes.cardRoot}>
            <Grid container>
              <Grid item container direction="row">
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.details}>
                    {switchRoutes}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12}  md={6}>
                  <img
                    className={classes.cover}
                    src={require('../assets/img/doctor-with-phone@3x.png')}
                    alt="Live from space album cover"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Box mt={5} mb={1} px={10}>
              <SmallText className={classes.textAlignCenter + ' ' + classes.p3} style={{'marginBottom': '32px'}}>
                Please note that this platform may only be accessed by authorized users. Each user can only view data associated with their specific account.
                By logging in, you are accepting our 
                <Link className={classes.link}  underline="always">Terms of Service</Link>.
                To find out how we protect you and your information, view our 
                <Link className={classes.link}  underline="always">Privacy Policy</Link>.</SmallText>
            </Box>
          </Grid>
          <Grid container>
            <SmallText className={classes.textAlignCenter + ' ' + classes.p3 + ' ' + classes.fullWidth} style={{'marginTop': '130px'}}>
              KangarooHealth Inc. ©2020
            </SmallText>
          </Grid>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};
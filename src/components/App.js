import React from 'react';
import Button from './Button';
import NewsItem from './NewsItem'
import Loading from './Loading'
import { ThemeProvider } from '@material-ui/styles';
import '../App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';


let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontSize: 12,
  }
});

theme = responsiveFontSizes(theme);

let App = () => (
  <ThemeProvider theme={theme}>
      <CssBaseline/>
     <Button />
     <Loading />
     <NewsItem />
  </ThemeProvider>
);
export default App;
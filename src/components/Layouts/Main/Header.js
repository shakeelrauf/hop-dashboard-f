import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
            Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
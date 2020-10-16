import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import PrimaryButton from '../../Buttons/PrimaryButton';
import {removeUserSession} from '../../../Utils/Common';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  const handleLogout = () =>  {
    removeUserSession();
    history.push('/auth');
  };

  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          <PrimaryButton onClick={() => handleLogout()}>Logout</PrimaryButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
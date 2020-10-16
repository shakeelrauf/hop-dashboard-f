import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import PrimaryButton from '../../Buttons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import {TextField} from '@material-ui/core';

function Header({logout}) {
  const history = useHistory();
  const handleLogout = () =>  {
    logout();
    history.push('/auth');
  };

  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <TextField
          variant="outlined"
          style={{minWidth: '320px', borderColor: '#e4e7eb'}}
          placeholder="Search Patients...."
          inputProps={{className: classes.input }}

          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton style={{padding: '0px'}}>
                  <SearchIcon style={{color: '#9ea0a5'}}/>
                </IconButton>
              </InputAdornment>
            ),
            classes: {
              adornedStart: classes.adornedStart
            }
          }}
        />
        <Typography variant="h6" noWrap>
          <PrimaryButton onClick={() => handleLogout()}>Logout</PrimaryButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const mapDispatchToProps = {
  logout: logout
};

const mapStateToProps = (state) => {
  return { };
};

const HeaderP = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderP;
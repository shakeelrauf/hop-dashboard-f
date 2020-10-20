import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { TextField, ListItem, List } from '@material-ui/core';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Menu from '../../Menu';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

function Header({ logout, handleDrawerToggle, mobileOpen }) {
  const history = useHistory();
  const classes = useStyles();

  const handleLogout = () =>  {
    logout();
    history.push('/auth');
  };
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container
          justify='space-between'
        >
          <Grid item className={classes.centerFlex + ' ' + classes.alignCenter} xs={3}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon className={classes.sideItem}/>
            </IconButton>
            <div className={classes.clientName + ' ' + classes.mL30}>
              %Clinic_Name
            </div>
          </Grid>
          <Grid item className={classes.centerFlex + ' ' + classes.justifyEnd} display="flex" xs={9}>
            <TextField
              variant="outlined"
              style={{minWidth: '320px', borderColor: '#e4e7eb',
                marginLeft: '41px',
                marginRight: '41px'
              }}
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
            <List style={{display: 'flex'}}>
              <ListItem style={{width: '30px', marginLeft: '11px', marginRight: '11px'}} component={Link} to="/messages"> 
                <MessageOutlinedIcon className={classes.sideItem}/>
              </ListItem>
              <ListItem style={{width: '30px', marginLeft: '11px', marginRight: '11px'}} > 
                <NotificationsOutlinedIcon className={classes.sideItem}/>
              </ListItem>
              <ListItem style={{ marginLeft: '11px', marginRight: '11px'}}> 
                <Menu handleLogout={handleLogout} 
                  titleMenu='Hello Ian' />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

const mapDispatchToProps = {
  logout: logout
};
const mapsToProps = (state) => {
  return {
    user: state.user
  };
};

const HeaderP = connect(mapsToProps, mapDispatchToProps)(Header);
export default HeaderP;
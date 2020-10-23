import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../../../assets/jss/styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { TextField, ListItem, List } from '@material-ui/core';
import Menu from '../../Menu';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import SystemNotificationDropdown from '../../../layouts/SystemNotificationDropdown';
import PatientMessageDropdown from '../../../layouts/PatientMessageDropdown';


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
            <Hidden xsDown implementation="css">
              <div className={classes.clientName + ' ' + classes.mL30}>
                %Clinic_Name
              </div>
            </Hidden>
          </Grid>
          <Grid item className={classes.centerFlex + ' ' + classes.justifyEnd} display="flex" xs={9}>
            <Hidden xsDown implementation="css">
              <TextField
                variant="outlined"
                style={{minWidth: '40%', borderColor: '#e4e7eb',
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
            </Hidden>
            <List style={{display: 'flex'}}>
              <ListItem style={{width: '30px', marginLeft: '11px', marginRight: '11px'}}> 
                <PatientMessageDropdown className={classes.sideItem}/>
              </ListItem>
              <ListItem style={{width: '30px', marginLeft: '11px', marginRight: '11px'}} > 
                <SystemNotificationDropdown className={classes.sideItem}/>
              </ListItem>
              <ListItem style={{ marginLeft: '11px', marginRight: '11px' , minWidth: '150px'}}> 
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
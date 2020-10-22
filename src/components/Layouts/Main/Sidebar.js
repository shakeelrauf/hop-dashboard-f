import React from 'react';
import useStyles from './styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SmallText from '../../Typography/SmallText';
import SidebarItems from './SidebarItems';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { primaryItems, secondaryItems } from '../../../Utils/SidebarItems';
import List from '@material-ui/core/List';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../../Utils/Common';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function SideBar(props) {
  const { mobileOpen, handleDrawerToggle } =props;
  const classes = useStyles();
  const user = getUser();
  if (!user){
    return (
      <Redirect to="/auth"/>
    );
  }
  const drawer = (
    <div>
      <Grid container style={{marginTop: '24px', marginBottom: '24px'}}>
        <Grid container
          justify="center"
          spacing={1}
          alignItems="center"
          direction="row"
        >
          <Avatar className={classes.largeAvatar} alt="Cindy Baker" src={require('../../../assets/img/userpic-copy@3x.png')} />
        </Grid>
        <Grid 
          className={classes.info}
        >
          <Typography className={classes.name}>
              Ian Barrett
          </Typography>
          <SmallText style={{fontSize: '12px', textAlign: 'center',
            lineHeight: 1.25,
            letterSpacing: '-0.05px'}}>
              Physician
          </SmallText>
        </Grid>
      </Grid>
      <Divider style={{marginLeft: '16px', marginRight: '16px'}} />
      <Hidden smUp implementation="css">

        <TextField
          variant="outlined"
          style={{minWidth: '40%', borderColor: '#e4e7eb',
            margin: '16px'
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
      <Grid container style={{padding: '16px'}}>
        <List style={{width: '100%'}}>
          {
            primaryItems.map((item, index) => <SidebarItems key={index} item={item}/>)
          }
        </List>
      </Grid>
      <Divider style={{marginLeft: '16px', marginRight: '16px'}} />
      <Typography className={classes.supportText}>
        Support
      </Typography>
      <Grid container style={{padding: '6px 16px 16px 16px'}}>
        <List style={{width: '100%'}}>
          {
            secondaryItems.map((item, index) => item.roles.includes(user.role) ? <SidebarItems key={index} item={item}/> : null)
          }
        </List>
      </Grid>
    </div>
  );
  return (
    <Grid className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, 
          }}
        >
          <Grid container item style={{marginTop: '75px'}} justify="flex-end" alignItems="flex-end">
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon  className={classes.sideItem}/>
            </IconButton>
          </Grid>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper1,
          }}
        >
          <div className={classes.toolbar} />
          {drawer}
        </Drawer>  
      </Hidden>
    </Grid>
  );
}


const mapStatesToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStatesToProps)(SideBar);




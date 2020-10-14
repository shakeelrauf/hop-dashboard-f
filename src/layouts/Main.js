import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes.js';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SmallText from '../components/Typography/SmallText';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/main') {
        return (
          <Route
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

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 99999,
    boxShadow: '0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05)',
    backgroundColor: '#ffffff'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: '64px'
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '64px'

  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: '64px'
  },

  largeAvatar: {
    marginBottom: theme.spacing(2),
    width: theme.spacing(12.5),
    height: theme.spacing(12.5),
  },
  name: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25',
    letterSpacing: '-0.05px',
    textAlign: 'center',
    color: '#3a3b3f'
  },
  sideItem: {
    color: '#66788a'
  },
  info: {
    width: '100%'
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid container style={{marginTop: '24px', marginBottom: '24px'}}>
          <Grid container
            justify="center"
            spacing={1}
            alignItems="center"
            direction="row"
          >
            <Avatar className={classes.largeAvatar} alt="Cindy Baker" src={require('../assets/img/userpic-copy@3x.png')} />
          </Grid>
          <Grid 
            justify="center"
            spacing={1}
            className={classes.info}
            alignItems="center"
            direction="row">
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
        <Grid container style={{padding: '16px'}}>
          <List style={{width: '100%'}}>
            <ListItem button >
              <ListItemIcon style={{minWidth: '30px'}}> 
                <HomeOutlined className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
                Home
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <InsertChartOutlinedOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
                Patient Metrics
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <AccountCircleOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
              Providers
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <LocalHospitalOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
              Patients
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <AssignmentOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
                Onboarding
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <MessageOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
                Messaging
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <SupervisedUserCircleOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
                Channels
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <NotificationsOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
                Notifications
              </SmallText>
            </ListItem>

            <ListItem button>
              <ListItemIcon style={{minWidth: '30px'}}> 
                <SettingsOutlinedIcon className={classes.sideItem} /> 
              </ListItemIcon>
              <SmallText style={{fontWeight: 600, color: '#66788a'}}>
                Settings
              </SmallText>
            </ListItem>
          </List>
          <Divider style={{marginLeft: '16px', marginRight: '16px'}} />
        </Grid>
      </Drawer>
      <main className={classes.content}>
        {switchRoutes}
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

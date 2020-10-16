import React from 'react';
import useStyles from './styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SmallText from '../../Typography/SmallText';
import SidebarItems from './SidebarItems';

export default function Sidebar() {
  const classes = useStyles();
  return (
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
          <Avatar className={classes.largeAvatar} alt="Cindy Baker" src={require('../../../assets/img/userpic-copy@3x.png')} />
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
        <SidebarItems></SidebarItems>
        <Divider style={{marginLeft: '16px', marginRight: '16px'}} />
      </Grid>
    </Drawer>);
}
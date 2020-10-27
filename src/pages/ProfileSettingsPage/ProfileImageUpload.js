
import React from 'react';
import {
  Grid, Card, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import SmallText from '../../components/Typography/SmallText';
import { connect } from 'react-redux';
import { changePassword } from '../../store/actions';
// import { getUser } from '../../Utils/Common';
import UploadImage from '../../components/common/UploadImage';
import commonStyles from '../../assets/jss/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    borderRadius: 2,
    width: '100%'
  },
  header: {
    fontSize: '16px',
    padding: theme.spacing(6),
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.05px',
    color: '#1e2633'
  },
  profileContainer: {
    padding: '24px'
  },
  name: {
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontWeight: 600,
    fontStretch: 'normal',
    marginLeft: '10px',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: '-0.06px',
    color: '#1e2633',
  },
  uploadButton: {},
  roleWrapper: {
    borderRadius: '5px',
    backgroundColor: '#c7f5cb',
    width: '94px',
    height: '34px',
    marginLeft: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: '5px'
  },
  role: {
    fontSize: '16px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    color: '#25b430',
  },
  button: {
    fontSize: '12px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '1.25px',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '15px'
  },
  uploadImage: {
    color: '#ff6f34',
  },
  removeImage: {
    color: '#425a70'
  },
}));

const ProfileImageUpload = ({ loading }) => {
  const classes = useStyles();
  const [profilePic, setProfile] = React.useState(null);
  const commonClasses = commonStyles();
  
  const handleUpload = (event) => {
    var file = event.target.files[0];
    setProfile(URL.createObjectURL(file));
  };

  const removePic = (event) => {
    setProfile(null);
  };

  return(
    <Grid item sm={12} md={4} xs={12}>  
      <Card className={classes.root} variant="outlined">
        <Grid container
          spacing={1}
          className={classes.profileContainer}
        >
          <Grid item sm={5} container xs={5}
            justify="center" align="center" >
            <Avatar className={commonClasses.largeAvatar} alt="Cindy Baker" src={profilePic || require('../../assets/img/userpic-copy@3x.png')} />
          </Grid>
          <Grid 
            item
            sm={7}
            xs={7}
            container 
            direction="column"
            justify="center"
            className={classes.info}
          >
            <Grid></Grid>
            <Typography className={classes.name}>
            Ian Barrett
            </Typography>
            <Grid className={classes.roleWrapper}>
              <Typography className={classes.role}>
              Physician
              </Typography>
            </Grid>
            <SmallText>
            </SmallText>
          </Grid>
        </Grid>
        <Divider/>
        <Grid container sm={12}>
          <Grid item sm={6} container justify="center" alignItems="center">
            <UploadImage handleUpload={handleUpload} className={classes.uploadImage + ' ' + classes.button}>
            UPLOAD PICTURE
            </UploadImage>
          </Grid>
          <Grid item sm={6} container justify="center" alignItems="center">
            <Typography onClick={removePic} className={classes.removeImage + ' ' + classes.button}>
            REMOVE PICTURE
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

const mapDispatchToProps = {
  changePassword: changePassword
};

const mapStatesToProps = state => {
  return {
    user: state.auth.user,loading: state.loading.loading
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(ProfileImageUpload);



    
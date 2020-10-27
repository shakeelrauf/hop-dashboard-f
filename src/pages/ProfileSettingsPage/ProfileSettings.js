
import React from 'react';
import {
  Grid, Card, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Danger from '../../components/Typography/Danger';
import PrimaryButton from  '../../components/Buttons/PrimaryButton';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { getProfile, logout, saveProfile } from '../../store/actions';
import { getUser } from '../../Utils/Common';
import { TextInput } from '../../components/Inputs';
import DatePicker from '../../components/common/DatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    borderRadius: 2,
    width: '100%'
  },
  profile: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      flexShrink: 0,
      marginLeft: 0
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
  content:{
    padding: theme.spacing(6),
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
  inputStyle: {
    marginTop: '17px',
    marginBottom: '17px',
  },
  marginLeft24: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '24px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
  }
}));

const ProfileSettingsSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.string().required('Required').matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    'Please write valid Phone Number'
  ),
  npi: Yup.string().length(10),
  email: Yup.string().email('Please write valid email').required('Required'),
  username: Yup.string().required('Required'),
});

const ProfileSettings = ({ profile, saveProfile, loading, getProfile, logout, user }) => {
  const classes = useStyles();

  React.useEffect(() => {
    let user = getUser();
    if(user){
      getProfile(user.uuid);
    }else{
      logout();
    }
  },[user, getProfile, logout]);
  return(
    <Grid item md={7} sm={12} xs={12} className={classes.profile}>  
      <Card className={classes.root} variant="outlined">
        <Typography  className={classes.header}>
            Profile Information
        </Typography>
        <Divider/>
        <Grid container>
          {
            Object.keys(profile).length !== 0 ?  (
              <Formik
                initialValues={{
                  firstName: profile.firstName,
                  lastName: profile.lastName,
                  npi: profile.npi,
                  username: profile.username,
                  email: profile.email,
                  phone: profile.phone,
                  birthDate: profile.birthDate
                }}
                validationSchema={ProfileSettingsSchema}
                onSubmit={(values,  { resetForm }) => {
                  values.id = getUser().uuid;
                  saveProfile(values);
                }}
              >
                {
                  ({ errors, touched, values, setFieldValue }) => {
                    return (
                      <Form style={{width: '100%'}}>
                        <Grid container item className={classes.content}>

                          <Grid item xs={12} md={10} sm={12}>
                            <Grid container item xs={12} md={12} sm={12}>
                              <Grid item xs={12} sm={12} md={5} lg={6}>
                                <TextInput label="First Name" className={classes.inputStyle}
                                  value={values['firstName']}
                                  name="firstName"
                                  type="text"
                                  onChange={e => setFieldValue('firstName', e.target.value)}
                                />
                                <Danger>{errors.firstName}</Danger>
                              </Grid>
                              <Grid item xs={12} sm={12} md={5} lg={6} >
                                <TextInput label="Last Name" className={classes.inputStyle} itemClass={classes.marginLeft24}
                                  value={values['lastName']}
                                  name="lastName"
                                  type="text"
                                  onChange={e => setFieldValue('lastName', e.target.value)}
                                />
                                <Danger className={classes.marginLeft24}>{errors.lastName}</Danger>
                              </Grid>
                            </Grid>
                            <Grid container item xs={12} md={12} sm={12}>
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextInput label="NPI Number (10 Digits)" className={classes.inputStyle}
                                  value={values['npi']}
                                  name="npi"
                                  type="text"
                                  onChange={e => setFieldValue('npi', e.target.value)}
                                />
                                <Danger>{errors.npi}</Danger>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextInput label="Username" className={classes.inputStyle} itemClass={classes.marginLeft24}
                                  value={values['username']}
                                  name="username"
                                  type="text"
                                  onChange={e => setFieldValue('username', e.target.value)}
                                />
                                <Danger className={classes.marginLeft24} >{errors.username}</Danger>
                              </Grid>
                            </Grid>

                            <Grid container item xs={12} md={12} sm={12}>
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextInput label="Email" className={classes.inputStyle}
                                  value={values['email']}
                                  name="email"
                                  type="email"
                                  onChange={e => setFieldValue('email', e.target.value)}
                                />
                                <Danger>{errors.email}</Danger>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextInput label="Phone" className={classes.inputStyle} itemClass={classes.marginLeft24}
                                  value={values['phone']}
                                  name="phone"
                                  type=""
                                  onChange={e => setFieldValue('phone', e.target.value)}
                                />
                                <Danger className={classes.marginLeft24}>{errors.phone}</Danger>
                              </Grid>
                            </Grid>
                            <Grid container item xs={12} md={12} sm={12}>
                              <Grid item xs={12} sm={12} md={6} lg={6} style={{marginTop: '17px'}}>
                                <DatePicker selectedDate={values['birthDate']}
                                  onChange={e => setFieldValue('birthDate', e)}
                                />
                                <Danger>{errors.birthDate}</Danger>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Divider/>
                        <Grid item xs={12} md={4} sm={12} className={classes.content}>
                          <PrimaryButton style={{padding: '7px'}} >{loading ? 'Loading...' : 'SAVE SETTINGS'}</PrimaryButton>
                        </Grid>
                      </Form>
                    );
                  }
                }
              </Formik>
            ) : null
          }
        </Grid>
      </Card>
    </Grid>
  );
};

const mapDispatchToProps = {
  getProfile: getProfile,
  logout: logout,
  saveProfile: saveProfile
};

const mapStatesToProps = state => {
  return {
    user: state.auth.user,
    loading: state.loading.loading,
    profile: state.profile.profile
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(ProfileSettings);


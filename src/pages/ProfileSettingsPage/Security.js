import React from 'react';
import {
  Grid, Card, Typography, InputAdornment
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { TextInput } from '../../components/Inputs';
import Danger from '../../components/Typography/Danger';
import PrimaryButton from  '../../components/Buttons/PrimaryButton';
import Tooltip from '@material-ui/core/Tooltip';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import { changePassword } from '../../store/actions';
import { getUser } from '../../Utils/Common';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    borderRadius: 2,
    width: '100%'
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
  content:{
    padding: theme.spacing(6),
  }
}));
const HtmlTooltip = withStyles((theme) => ({
}))((props) => {
  return (<Tooltip {...props} />);}
);

const BookSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Required'),
  newPassword: Yup.string().required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  ),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Required')
});
const Security = ({ changePassword, loading }) => {
  const classes = useStyles();
  const user = getUser();

  const handleChangePassword = (values) => {
    changePassword(user.email, values.newPassword, values.currentPassword);
  };
  return(
    <Grid item container
      xs={12} sm={8}>
      <Card className={classes.root} variant="outlined">
        <Typography  className={classes.header}>
            Change Password
        </Typography>
        <Divider/>
        <Grid container>
          <Formik
            initialValues={{
              currentPassword: '',
              newPassword: '',
              confirmPassword: ''
            }}
            validationSchema={BookSchema}
            onSubmit={(values,  { resetForm }) => {
              handleChangePassword(values);
              resetForm();
            }}
          >
            {
              ({ errors, touched, values, setFieldValue }) => {
                return (
                  <Form style={{width: '100%'}}>
                    <Grid container item className={classes.content}>

                      <Grid item xs={12} md={5} sm={12}>
                        <TextInput label="Current Password" style={{ 'marginBottom': '12px'}}
                          value={values['currentPassword']}
                          name="currentPassword"
                          type="password"
                          onChange={e => setFieldValue('currentPassword', e.target.value)}
                        />
                        <Danger>{errors.currentPassword}</Danger>
                        <TextInput label="New Password" type="password" style={{'marginTop': '12px', 'marginBottom': '12px'}} 
                          value={values['newPassword']}
                          name="newPassword"
                          endAdornment={
                            <HtmlTooltip
                              arrow
                              placement="right"
                              title={
                                <React.Fragment>
                                  • must be 8 characters or more<br/>
                                  • at least including one numeric number <br/>
                                  • at least including one capital letter <br/>
                                  • at least including one lower case letter <br/>
                                  • include one of these special characters: $, *, !, ?<br/>
                                </React.Fragment>
                              }
                            >
                          
                              <InputAdornment>
                                <IconButton style={{padding: 0}}>
                                  <HelpIcon style={{color: '#9ea0a5'}}/>
                                </IconButton>
                              </InputAdornment>
                            </HtmlTooltip>
                          }
                          onChange={e => setFieldValue('newPassword', e.target.value)}
                        />
                        <Danger>{errors.newPassword}</Danger>

                        <TextInput label="Confirm New Password" type="password" style={{'marginTop': '12px'}} 
                          value={values['confirmPassword']}
                          name="confirmPassword"
                          onChange={e => setFieldValue('confirmPassword', e.target.value)}
                        />
                        <Danger>{errors.confirmPassword}</Danger>
                      </Grid>
                    </Grid>
                    <Divider/>
                    <Grid item xs={12} md={4} sm={12} className={classes.content}>
                      <PrimaryButton style={{padding: '7px'}} >{loading ? 'Loading...' : 'Update Password'}</PrimaryButton>
                    </Grid>
                  </Form>
                );
              }
            }
          </Formik>

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

export default connect(mapStatesToProps, mapDispatchToProps)(Security);



import React, { useEffect } from 'react';
import {
  Grid,
  Box,
  makeStyles,
  Link
} from '@material-ui/core';
import PrimaryButton from  '../../../components/Buttons/PrimaryButton';
import Heading from '../../../components/Typography/Heading';
import SmallText from '../../../components/Typography/SmallText';
import { TextInput } from '../../../components/Inputs';
import { resetPassword } from '../../../store/actions';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Toast from '../../../components/Toast';
import Danger from '../../../components/Typography/Danger';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../../Utils/Common';
import { connect } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  fullHeight: {
    height: '100%'
  },
  boxPadding: {
    padding: '40px 60px'
  },
  fullWidth: {
    width: '100%'
  },
  link: {
    color: '#9ea0a5',
    alignItems: 'center',
    display: 'flex'
  },
  backIcon: {
    marginRight: '5px'
  }
}));

const BookSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Format of email is incorrect'),
});

function ResetPassword(props){
  const { resetPassword, error, user, loading, success } = props;
  const history = useHistory();
  const classes = useStyles();
  
  const resetHandle = (values) => {
    resetPassword(values.email);
  };

  const goToLogin = (event) => {
    event.preventDefault();
    history.push('/auth/login');
  };

  useEffect(() => {
    if(user && getUser()){
      history.push('/index');
    }
  });

  return(
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.fullHeight}>
      <Box p={10} px={15} className={classes.fullHeight + ' ' + classes.fullWidth + ' ' + classes.boxPadding}>
        <Toast open={error ? true : false}  message={error && error.message} type="error" />
        <Toast open={success ? true : false}  message={success && success.message} type="success" />
        <Heading>Reset Password</Heading>
        <SmallText>Enter your email address below to reset password</SmallText>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={BookSchema}
          onSubmit={(values) => {
            resetHandle(values);
          }}
        >
          {
            ({ errors, touched, values, setFieldValue }) => {
              return (
                <Form>
                  <TextInput label="Email Address" style={{'marginTop': '40px', 'marginBottom': '13px'}}
                    value={values['email']}
                    name="email"
                    onChange={e => setFieldValue('email', e.target.value)}
                  />
                  <Danger>{errors.email}</Danger>
                  <PrimaryButton style={{'marginTop': '24px', 'marginBottom': '24px'}} >{loading ? 'Loading....' : 'Reset Password'}</PrimaryButton>
                  <SmallText style={{'marginBottom': '32px'}}><Link className={classes.link + ' ' + classes.dFlex + ' ' + classes.alignCenter} href="#" onClick={goToLogin}><ArrowBackIcon className={classes.backIcon}/> Back to Log In</Link></SmallText>
                </Form>
              );
            }
          }
        </Formik>
      </Box>
    </Grid>
  );
};


const mapDispatchToProps = {
  resetPassword: resetPassword
};

const mapStateToProps = (state) => {
  return{ user: state.auth.user, error: state.auth.resetError, success: state.auth.resetSuccess, loading: state.loading.loading };
};

const ResetPasswordP = connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
export default ResetPasswordP;

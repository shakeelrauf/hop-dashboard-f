import React, { useEffect } from 'react';
import {
  Grid,
  Box,
  makeStyles,
  Link
} from '@material-ui/core';
import PrimaryButton from  '../../../components/Buttons/PrimaryButton';
import Heading from '../../../components/Typography/Heading';
import Danger from '../../../components/Typography/Danger';
import SmallText from '../../../components/Typography/SmallText';
import PrimaryText from '../../../components/Typography/PrimaryText';
import { TextInput } from '../../../components/Inputs';
import { loginUser } from '../../../store/actions';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Toast from '../../../components/Toast';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../../Utils/Common';
import { connect } from 'react-redux';

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
  }
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Format of email is incorrect'),
  password: Yup.string().required('Required')
});

function LoginPage(props){
  const { loginUser, authError, user, loading } = props;
  const history = useHistory();
  const classes = useStyles();
  
  const handleLogin = (values) => {
    loginUser(values.email, values.password);
  };
  const goToReset = (event) => {
    event.preventDefault();
    history.push('/auth/reset-password');
  };

  useEffect(() => {
    if(user && getUser()){
      history.push('/dashboard');
    }
  });

  return(
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.fullHeight}>
      <Box p={10} px={15} className={classes.fullHeight + ' ' + classes.fullWidth + ' ' + classes.boxPadding}>
        <Toast open={authError ? true : false}  message={authError && authError.message} type="error" />
        <Heading>Log In to KangarooHealth</Heading>
        <SmallText>Enter your details to log in to your account</SmallText>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {
            ({ errors, touched, values, setFieldValue }) => {
              return (
                <Form>
                  <TextInput label="Email" style={{'marginTop': '40px', 'marginBottom': '13px'}}
                    value={values['email']}
                    name="email"
                    onChange={e => setFieldValue('email', e.target.value)}
                  />
                  <Danger>{errors.email}</Danger>
                  <TextInput label="Password" type="password" style={{'marginTop': '13px'}} 
                    value={values['password']}
                    name="password"
                    onChange={e => setFieldValue('password', e.target.value)}
                  />
                  <Danger>{errors.password}</Danger>
                  <PrimaryButton style={{'marginTop': '24px', 'marginBottom': '24px'}} >{loading ? 'Loading....' : 'LOG IN'}</PrimaryButton>
                  <SmallText style={{'marginBottom': '32px'}}>Forget your password? <Link className={classes.link} href="#" onClick={goToReset} underline="always"> Reset Password</Link></SmallText>
                  <PrimaryText>NEED MORE HELP?</PrimaryText>
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
  loginUser: loginUser
};

const mapStateToProps = (state) => {
  return{ user: state.auth.user, authError: state.auth.error, loading: state.loading.loading };
};

const LoginPageP = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPageP;

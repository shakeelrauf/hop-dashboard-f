import React, { useState } from 'react';
import {
  Grid,
  Box,
  makeStyles,
  Link
} from '@material-ui/core';
import PrimaryButton from  '../../../components/Buttons/PrimaryButton';
import Heading from '../../../components/Typography/Heading';
import SmallText from '../../../components/Typography/SmallText';
import PrimaryText from '../../../components/Typography/PrimaryText';
import { TextInput } from '../../../components/Inputs';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Danger from '../../../components/Typography/Danger';
import { authApiCreate } from '../../../api/authApi';
import { setUserSession } from '../../../Utils/Common';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

const BookSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Format of email is incorrect'),
  password: Yup.string().required('Required')
});

export default function LoginPage(props){
  const api = authApiCreate();
  const history = useHistory();
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState('');
  const classes = useStyles();
  const handleLogin = (props) => {
    setAuthLoading(true);
    api.createToken().then(tokenRes => {
      if(tokenRes.data.response){
        api.userSignIn(tokenRes.data.response.url, tokenRes.data.response.grant, props.email, props.password).then(res => {
          if(res.data.response){
            setUserSession(res.data.token, res.data.response);
            history.push('/index');
          }else{
            setError('Invalid Login Credentials');
          }
        }).catch(err => {
          setError(err);
        }).finally(() => {
          setAuthLoading(false);
        });
      }else{
        setError('Something went wrong');
      }      
    }).catch(err => {
      setError(err);
    }).finally(()=>{
      setAuthLoading(false);
    });
  };

  return(
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.fullHeight}>
      <Box p={10} px={15} className={classes.fullHeight + ' ' + classes.fullWidth + ' ' + classes.boxPadding}>
        {
          error ? 
            <Alert severity="error" onClick={() => setError(null)} style={{marginBottom: '20px'}}>
              {error}
            </Alert> : 
            ''
        }
        <Heading>Log In to KangarooHealth</Heading>
        <SmallText>Enter your details to log in to your account</SmallText>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={BookSchema}
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
                  <PrimaryButton style={{'marginTop': '24px', 'marginBottom': '24px'}} >{authLoading ? 'Loading....' : 'LOG IN'}</PrimaryButton>
                  <SmallText style={{'marginBottom': '32px'}}>Forget your password? <Link className={classes.link} underline="always"> Reset Password</Link></SmallText>
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
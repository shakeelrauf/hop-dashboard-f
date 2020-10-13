import React from 'react';
import {
  Paper,
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
export default function LoginPage(){
  const classes = useStyles();

  return(
    <Paper>
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.fullHeight}>
        <Box p={10} px={15} className={classes.fullHeight + ' ' + classes.fullWidth + ' ' + classes.boxPadding}>
          <Heading>Log In to KangarooHealth</Heading>
          <SmallText>Enter your details to log in to your account</SmallText>
          <TextInput label="First Name" style={{'marginTop': '40px', 'marginBottom': '13px'}}/>
          <TextInput label="Password" type="password" style={{'marginTop': '13px'}}/>
          <PrimaryButton style={{'marginTop': '24px', 'marginBottom': '24px'}}>LOG IN</PrimaryButton>
          <SmallText style={{'marginBottom': '32px'}}>Forget your password? <Link className={classes.link} underline="always"> Reset Password</Link></SmallText>
          <PrimaryText>NEED MORE HELP?</PrimaryText>
        </Box>
      </Grid>
    </Paper>
  );
};
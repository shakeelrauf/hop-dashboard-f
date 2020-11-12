import React from 'react';
import Modal from '../../components/common/Modal';
import {connect} from 'react-redux';
import { deletePatient, callbackEnd } from '../../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { TextInput } from '../../components/Inputs';
import Danger from '../../components/Typography/Danger';
import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  
  inputStyle: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  marginForMd: {
    [theme.breakpoints.only('md')]: {
      marginLeft: '16px'
    },
  },
  marginLeft17: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '16px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
  },
  subTitle: {
    'font-family': 'Roboto',
    'font-size': '16px',
    'font-weight': 600,
    'font-stretch': 'normal',
    'font-style': 'normal',
    'line-height': 1.25,
    'letter-spacing': '-0.05px',
    'color': '#1e2633',
    marginBottom: '14px'
  },
  marginTop35: {
    marginTop: '35px'
  }
}));
const passwordConfirmSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
});

const DeletePatientModal = ({ id,callbackState, callbackEnd, actionStart,deletedPatient, modal, handleClose, deletePatient, setReload }) => {
  const classes = useStyles();
  
  const deletePatientAction = (values) => {
    deletePatient(id,values);
  };

  React.useEffect(()=> {
    if(callbackState === 'delete'){
      handleClose();
      callbackEnd();
      setReload(Math.random(10000));
    }
  },[callbackState, handleClose, setReload, callbackEnd]);
	
  return(
    <Modal
      handleClose={handleClose}
      open={modal}
      containerStyle={{padding: '33px'}}
      headerStyle={{padding: '35px 23px 28px 35px'}}
      close={false}
      variant="h4"
      titleStyle={{
        fontFamily: 'Roboto',
        fontSize: '24px',
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.17,
        letterSpacing: '-0.06px',
        color: '#1e2633',
      }}
      title={'Delete Patient'}
    >
      <Formik
        initialValues={{password: null}}
        validationSchema={passwordConfirmSchema}
        enableReinitialize
        onSubmit={(values,  { resetForm }) => {
          deletePatientAction(values);
        }}
      >
        {
          ({ errors, touched, values, setFieldValue }) => {
            return (
              <Form style={{width: '100%'}}>
                <Grid container item className={classes.content}>
                  <Typography className={classes.subTitle}>
                      Enter Password to delete record
                  </Typography>
                  <Grid container item xs={12} md={12} sm={12}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextInput label="Password" 
                        value={values['password'] || ''}
                        name="password"
                        type="password"
                        className={classes.inputStyle}
                        onChange={e => setFieldValue('password', e.target.value)}
                      />
                      <Danger>{errors.password}</Danger>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid style={{
                  paddingTop: '50px',
                  display: 'flex',
                  justifyContent: 'flex-end'}}>
                  <PrimaryButton style={{width: '176px'}}>
                    <Typography style={{fontSize: '15px', fontWeight: 600}}>
                      {'Confirm password'}
                    </Typography>
                  </PrimaryButton>
                </Grid>
              </Form>
            );
          }
        }
      </Formik>
    </Modal>	
  );
};

const mapDispatchToProps = {
  deletePatient: deletePatient,
  callbackEnd: callbackEnd
};

const mapStateToProps = (state) => {
  return{ loading: state.loading.loading, callbackState:  state.callback.state };
};

const DeletePatientModalP = connect(mapStateToProps, mapDispatchToProps)(DeletePatientModal);
export default DeletePatientModalP;
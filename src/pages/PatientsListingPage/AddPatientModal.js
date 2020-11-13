import React from 'react';
import Modal from '../../components/common/Modal';
import {connect} from 'react-redux';
import { addNewPatient, callbackEnd } from '../../store/actions';
import { getUser } from '../../Utils/Common';
import Form from './form';
import { patientListingFields, patientListingSchema } from '../../schemas/patientSchema';

const AddPatientModal = ({ modal, callbackEnd, callbackState, handleClose, addNewPatient, setReload }) => {
  
  const addPatient = (values) => {
    if(values.birthDate && values.birthDate.c){
      values.birthDate = values.birthDate ? `${values.birthDate.c.month}/${values.birthDate.c.day}/${values.birthDate.c.year}` : null;
    }else{
      if(values.birthDate){
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(values.birthDate);
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(values.birthDate);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(values.birthDate);
        values.birthDate = `${mo}/${da}/${ye}`;
      }
    }
    let user = getUser();
    values.organization = user.organizationId;
    addNewPatient(values);
    handleClose();
  };
  
  React.useEffect(()=> {
    if(callbackState === 'addPatient'){
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
      title={'Add Patient'}
    >
      <Form onSubmit={addPatient} schema={patientListingSchema} fields={patientListingFields}/>
    </Modal>	
  );
};

const mapDispatchToProps = {
  addNewPatient: addNewPatient,
  callbackEnd: callbackEnd
};

const mapStateToProps = (state) => {
  return{ loading: state.loading.loading,  callbackState:  state.callback.state };
};

const AddPatientModalP = connect(mapStateToProps, mapDispatchToProps)(AddPatientModal);
export default AddPatientModalP;
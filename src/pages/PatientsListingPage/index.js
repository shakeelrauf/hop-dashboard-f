import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import TabsView from '../../components/common/TabsView';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import AllPatients from './AllPatients';
import AddPatientModal from './AddPatientModal';
import UpdatePatientModal from './UpdatePatientModal';
import DeletePatientModal from './deletePatientModal';
import { getPatient, emptyPatient } from '../../store/actions';
import { connect } from 'react-redux';

const tabs = [{heading:'ALL PATIENTS', component: AllPatients},{heading:'MY PATIENTS'}];

const PatientsListingPage = ({getPatient, patient, emptyPatient}) => {
  const [patientForm, showPatientForm] = React.useState(false);
  const [updateForm, setUpdateForm] = React.useState(false);
  const [deleteForm, setDeleteForm] = React.useState(false);
  const [reload , setReload] = React.useState('');
  const [id, setId] = React.useState(null);
  const closePatientForm = () => {
    showPatientForm(false);
  };

  const closeDeleteForm = () => {
    setDeleteForm(false);
  };

  const closePatientUpdateForm = () => {
    setUpdateForm(false);
  };

  const editAction = (id) => {
    emptyPatient();
    getPatient(id);
    setUpdateForm(true);
  };

  const deleteAction = (id) => {
    setId(id);
    setDeleteForm(true);
  };

  const openForm = () => {
    showPatientForm(true);
  };
  
  return(
    <Grid container>
      <Grid  item xs={12}>
        <TabsView action2={editAction} action3={deleteAction} reload={reload} addBtn={<PrimaryButton style={{fontWeight: 600, padding: '9px'}} onClick={() => openForm()}>ADD NEW PATIENT</PrimaryButton>} tabs={tabs}/>
      </Grid>
      <AddPatientModal  setReload={setReload} modal={patientForm} handleClose={closePatientForm}/>
      <UpdatePatientModal patient={patient} setReload={setReload} modal={updateForm} handleClose={closePatientUpdateForm}/>
      <DeletePatientModal id={id} setReload={setReload} modal={deleteForm} handleClose={closeDeleteForm}/>
    </Grid>
  );
};


const mapDispatchToProps = {
  getPatient: getPatient,
  emptyPatient: emptyPatient
};

const mapStateToProps = (state) => {
  return{ patient: state.patient.patient };
};

const PatientsListingPageP = connect(mapStateToProps, mapDispatchToProps)(PatientsListingPage);
export default PatientsListingPageP;
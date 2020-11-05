import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import TabsView from '../../components/common/TabsView';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import AllPatients from './AllPatients';
const tabs = [{heading:'ALL PATIENTS', component: <AllPatients/>},{heading:'MY PATIENTS'}];
  
const PatientsListingPage = () => {
  return(
    <Grid container>
      {/* <ActivationState value={'clicked'}/> */}
      <Grid item xs={12}>
        <TabsView addBtn={<PrimaryButton style={{fontWeight: 600}}>ADD NEW PATIENT</PrimaryButton>} tabs={tabs}/>
      </Grid>
    </Grid>
  );
};

export default PatientsListingPage;

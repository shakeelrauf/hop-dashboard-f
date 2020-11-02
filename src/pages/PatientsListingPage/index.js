import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import TabsView from '../../components/common/TabsView';
import AllPatients from './AllPatients';
const tabs = [{heading:'ALL PATIENTS', component: <AllPatients/>},{heading:'MY PATIENTS'}];
  
const PatientsListingPage = () => {
  return(
    <Grid>
      {/* <ActivationState value={'clicked'}/> */}
      <TabsView tabs={tabs}/>
    </Grid>
  );
};

export default PatientsListingPage;

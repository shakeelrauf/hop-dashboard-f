import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import TabsView from '../../components/common/TabsView';

const tabs = [{heading:'OVERVIEW'},{heading:'MESSAGING'}, {heading:'CHECKING'}, {heading:'NOTIFICATIONS'}, {heading:'CLINICS NOTES'}, {heading:'PRIORITY'}, {heading:'LOG TIME'},{heading:'VITALS'}, {heading:'WOUND'}, {heading:'COMPLIANCE'}, {heading:'PRO'}];
  
const PatientsPage = () => {

  return(
    <Grid>
      <TabsView tabs={tabs}/>
    </Grid>
  );
};

export default PatientsPage;
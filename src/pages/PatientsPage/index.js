import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import TabsView from '../../components/common/TabsView';
import TablePage from '../Table/Table';

const tabs = [{heading:'OVERVIEW', component: TablePage},{heading:'MESSAGING', compoent: Grid}, {heading:'CHECKING', compoent: Grid}, {heading:'NOTIFICATIONS', compoent: Grid}, {heading:'CLINICS NOTES', compoent: Grid}, {heading:'PRIORITY', compoent: Grid}, {heading:'LOG TIME', compoent: Grid},{heading:'VITALS', compoent: Grid}, {heading:'WOUND', compoent: Grid}, {heading:'COMPLIANCE', compoent: Grid}, {heading:'PRO', compoent: Grid}];
  
const PatientsPage = () => {

  return(
    <Grid>
      <TabsView tabs={tabs}/>
    </Grid>
  );
};

export default PatientsPage;

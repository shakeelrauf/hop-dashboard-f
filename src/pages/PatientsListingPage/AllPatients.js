import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import ActivationState from '../../components/common/patients/ActivationState';

import StatisticItem from './StatisticsDashboarditem';
const items = [
  {
    label: 'All Patients',
    value: '243',
    desc: 'Total number of patients'
  },
  {
    label: 'High Priority',
    desc: 'High Priority',
    value: '16',
  },
  {
    label: 'Incomplete Checkin',
    value: '33',
    desc: 'Show only patients whose last checkin was 2 or more days ago',
  },
  {
    label: 'Recent Patients',
    desc: 'Show only the patients who were added in the last 7 days',
    value: '4',
  },
];
const AllPatients = () => {
  return(
    <Grid>
      <Grid container>
        {
          items.map(item => {
            return (
              <Grid item xs={12} sm={12} md={3}  >
                <StatisticItem label={item.label} value={item.value} desc={item.desc}/>
              </Grid>
            );
          })
        }
      </Grid>
      <ActivationState value={'new'}/>
    </Grid>
  );
};

export default AllPatients;

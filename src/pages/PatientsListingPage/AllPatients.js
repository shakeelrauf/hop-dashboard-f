import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import ActivationState from '../../components/common/patients/ActivationState';
import Priority from '../../components/common/patients/Priority';
import DateFormat from '../../components/common/patients/DateFormat';
import DateDifference from '../../components/common/patients/DateDifference';
import Actions from '../../components/common/patients/Actions';
import { EnhancedTable } from '../../components/EnhancedTable';
import StatisticItem from './StatisticsDashboarditem';

import { getPatientsMeta } from '../../store/actions';
import { connect } from 'react-redux';

const cardItems = [
  {
    label: 'All Patients',
    value: '243',
    desc: 'Total number of patients',
    key: 'total'
  },
  {
    label: 'High Priority',
    desc: 'High Priority',
    value: '16',
    key: 'active'
  },
  {
    label: 'Incomplete Checkin',
    value: '33',
    desc: 'Show only patients whose last checkin was 2 or more days ago',
    key: 'intakeInComplete'
  },
  {
    label: 'Recent Patients',
    desc: 'Show only the patients who were added in the last 7 days',
    value: '4',
    key: 'new'
  },
];

const priorityList = [{label: 'Low', value: 'low'},{label: 'Medium', value: 'medium'},{label: 'High', value: 'high'}];
const statusList = [
  {label: 'Inactive', value: 'inactive'},
  {label: 'Delivered', value: 'delivered'},
  {label: 'Opened', value: 'opened'},
  {label: 'Clicked', value: 'clicked'},
  {label: 'Login', value: 'login'},
  {label: 'New', value: 'new'},
  {label: 'Active', value: 'active'},
];

const headCells = [
  { searchKey: 'name',sortKey: 'name', key: ['firstName', 'lastName'], numeric: false, disablePadding: true, label: 'Name'},
  { searchKey: 'status',sortKey: 'status', key: 'status', numeric: true, disablePadding: false, label: 'Status', render: ActivationState, type: 'list', list: statusList },
  { searchKey: 'priority',sortKey: 'priority', key: 'priority', numeric: true, disablePadding: false, label: 'Priority', render: Priority,  type: 'list', list: priorityList  },
  { searchKey: 'created',sortKey: 'created', key: 'timestamp', numeric: true, disablePadding: false, label: 'Created At', render: DateFormat, type: 'date' },
  { searchKey: 'checkin',sortKey: 'checkin', key: 'timestamp', numeric: true, disablePadding: false, label: 'Last Check In', render: DateDifference, type: 'date' },
  { search: false, sort: false, numeric: true, disablePadding: false, label: 'Actions', render: Actions, key: 'id'},
];

const AllPatientsPage = ({getPatientsMeta, meta={}}) => {

  React.useEffect(() => {
    getPatientsMeta();
  },[getPatientsMeta]);

  return(
    <Grid>
      <Grid container style={{marginTop: '30px'}}>
        {
          cardItems.map(item => {
            return (
              <Grid key={item.value} item xs={12} sm={6} md={6} lg={3}  >
                <StatisticItem meta={meta} key={item.key} item={item} label={item.label}  desc={item.desc}/>
              </Grid>
            );
          })
        }
      </Grid>
      <Grid style={{marginTop: '30px'}}>
        <EnhancedTable  url="person/patients" async={true} headCells={headCells}/>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = {
  getPatientsMeta: getPatientsMeta
};

const mapStateToProps = (state) => {
  return{ meta: state.patients.meta };};

const AllPatientsP = connect(mapStateToProps, mapDispatchToProps)(AllPatientsPage);
export default AllPatientsP;

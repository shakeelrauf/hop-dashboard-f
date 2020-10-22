import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import ProfileSettingsTab from '../../components/common/ProfileSettingsTab';
import Security from './Security';

const tabs = [{heading:'Profile'},{heading:'Security', component: <Security/>}];
  
const ProfileSettingsPage = () => {

  return(
    <Grid>
      <ProfileSettingsTab tabs={tabs}/>
    </Grid>
  );
};

export default ProfileSettingsPage;

import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import ProfileSettingsTab from '../../components/common/ProfileSettingsTab';
import Security from './Security';
import Profile from './Profile';

const tabs = [
  {heading:'Profile', component: <Profile/>},
  {heading:'Security', component: <Security/>}
];
  
const ProfileSettingsPage = () => {

  return(
    <Grid>
      <ProfileSettingsTab tabs={tabs}/>
    </Grid>
  );
};

export default ProfileSettingsPage;

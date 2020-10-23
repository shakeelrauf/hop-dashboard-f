import React from 'react';
import {
  Grid
} from '@material-ui/core';
import ProfileSettings from './ProfileSettings';
import ProfileImageUpload from './ProfileImageUpload';

const Profile = () => {
  return(
    <Grid item container
      xs={12} sm={11}
    > 
      <ProfileImageUpload/>
      <ProfileSettings/>
    </Grid>
  );
};

export default Profile;



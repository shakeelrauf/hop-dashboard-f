import React from 'react';
import PropTypes from 'prop-types';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Grid from '@material-ui/core/Grid';

function Actions({ value }) {
  React.useEffect(() =>{
  }, [value]);
  return (
    <Grid style={{minWidth: '130px'}}>
      <MessageOutlinedIcon/>
      <EditOutlined style={{marginLeft: '25px', marginRight: '25px'}}/>
      <DeleteOutline/>
    </Grid>
  );
}

Actions.propTypes = {
  value: PropTypes.number,
};

export default Actions;

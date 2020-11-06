import React from 'react';
import PropTypes from 'prop-types';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


function Actions({ value }) {
  React.useEffect(() =>{
  }, [value]);
  return (
    <Grid style={{minWidth: '130px'}}>
      <Button style={{padding: '2px',minWidth: 0,}}>
        <MessageOutlinedIcon/>
      </Button>
      <Button style={{marginLeft: '25px', marginRight: '25px', padding: '2px',minWidth: 0}}>
        <EditOutlined />
      </Button>
      <Button style={{padding: '2px',minWidth: 0}}>
        <DeleteOutline/>
      </Button>
    </Grid>
  );
}

Actions.propTypes = {
  value: PropTypes.number,
};

export default Actions;

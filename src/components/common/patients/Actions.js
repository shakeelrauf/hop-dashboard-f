import React from 'react';
import PropTypes from 'prop-types';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getPatient } from '../../../store/actions';

function Actions({ value, getPatient, action2, action3 }) {
  const editPatient = () => {
    action2(value);
  };

  const deletePatient = () => {
    action3(value);
  };

  React.useEffect(() =>{
    
  }, [value]);
  return (
    <Grid style={{minWidth: '130px'}}>
      <Button style={{padding: '2px',minWidth: 0,}}>
        <MessageOutlinedIcon/>
      </Button>
      <Button onClick={() => editPatient()} style={{marginLeft: '25px', marginRight: '25px', padding: '2px',minWidth: 0}}>
        <EditOutlined />
      </Button>
      <Button onClick={() => deletePatient()} style={{padding: '2px',minWidth: 0}}>
        <DeleteOutline/>
      </Button>
    </Grid>
  );
}

Actions.propTypes = {
  value: PropTypes.string,
};


const mapDispatchToProps = {
  getPatient: getPatient
};

const mapStateToProps = (state) => {
  return{ loading: state.loading.loading };
};

const ActionsP = connect(mapStateToProps, mapDispatchToProps)(Actions);
export default ActionsP;

import React from 'react';
import {
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  primaryBtn: {
    'border-radius': '4px',
    'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',
    'width': '100%'
  }
}));

let PrimaryButton = ({style={},variant='contained', type='submit', onClick, children, loading})  => {
  const classes = useStyles();
  
  return(
    <Button
      variant={variant}
      color="primary"
      type={type}
      onClick={onClick}
      style={{padding: '10px',...style}}
      className={classes.primaryBtn}
    >
      {
        loading === true ? 'Loading' : children
      }
    </Button>
  );
};

export default PrimaryButton;
  
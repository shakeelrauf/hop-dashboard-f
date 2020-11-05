import React from 'react';
import {
  Button,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tagBtn: {
  }
}));

let TagButton = ({style={},background,variant='outlined', type='submit', onClick, children, loading, color})  => {
  const classes = useStyles();
  
  return(
    <Button
      variant={variant}
      type={type}
      onClick={onClick}
      style={{padding: '3px 10px',backgroundColor: background, borderColor: color, color: color,...style}}
      className={classes.tagBtn}
    > 
      <Typography style={{color:  color, fontSize: '12px', textTransform: 'capitalize'}}>
        {children}
      </Typography>
    </Button>
  );
};

export default TagButton;
  
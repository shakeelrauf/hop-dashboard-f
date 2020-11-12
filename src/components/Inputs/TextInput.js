import React from 'react';
import {
  TextField,
  Grid,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    padding: '15.5px 14px'
  },
  cssLabel: {
    '&$Hover': {
      color: 'yellow',
    },
  },
  cssOutlinedInput: {
    '&$Hover $notchedOutline': {
      borderColor: 'yellow',
    },
  },
  cssFocused: {},
  root: {
    height: '56px',
    '&$disabled $notchedOutline': {
      
    },
    '&:hover $notchedOutline': {
    }
  },
  disabled: {
    borderColor: 'yellow'
  },
  notchedOutline: {}
}));


export function TextInput ({style, itemClass, className, required=false,label, variant='outlined', type='text', placeholder, name, value, onChange, endAdornment}) {
  const classes = useStyles();
  
  return(
    <Grid item className={itemClass}>
      <TextField
        type={type}
        placeholder={placeholder}
        fullWidth
        name={name}
        variant={variant}
        value={value}
        onChange={onChange}
        required={required}
        label={label}
        className={classes.root + ' ' + className}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        inputProps={{className: classes.input }}
        InputProps={
          {
            endAdornment,
            classes: {
              root: classes.root,
              disabled: classes.disabled,
              notchedOutline: classes.notchedOutline
            }
          }}
        style={style}
        autoFocus
      />
    </Grid>);
}
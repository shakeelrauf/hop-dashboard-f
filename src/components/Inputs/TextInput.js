import React from 'react';
import {
  TextField,
  Grid,
} from '@material-ui/core';

export function TextInput ({required=false, variant='outlined', type='text', placeholder, name, value, onChange}) {
  return(
    <Grid item>
      <TextField
        type={type}
        placeholder={placeholder}
        fullWidth
        name={name}
        variant={variant}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus
      />
    </Grid>);
}
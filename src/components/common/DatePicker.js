import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/luxon';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function MaterialUIPickers({ placeholder, selectedDate, style, onChange }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          style={{width: '100%', ...style}}
          placeholder={placeholder}
          value={selectedDate}
          helperText={''}
          inputVariant="outlined"
          onChange={date => onChange(date)}
          format="yyyy/MM/dd"
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
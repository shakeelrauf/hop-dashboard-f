import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { TextField , InputAdornment } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { useToolbarStyles } from '../../config/MeterialCustomization';

export const EnhancedTableToolbar = (props) => {
  const deleteRecords = (values) => {
    setSelected([]);
    handleDelete(selected);
  };
  const classes = useToolbarStyles();
  const { numSelected, search, setSelected, setSearch, title='' , handleDelete, selected} = props;
  
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (title)}
  
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={e => deleteRecords(selected)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      )}
    </Toolbar>
  );
};
  
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
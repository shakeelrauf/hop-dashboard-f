import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { TextField , InputAdornment } from '@material-ui/core';

export const EnhancedTableToolbar = (props) => {
  // const deleteRecords = (values) => {
  //   setSelected([]);
  //   handleDelete(selected);
  // };
  const { searchEnable=false, search, setSearch } = props;
  
  return (
    <>
      {/* {numSelected > 0 ? (
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
      ) :  */}
      {
        searchEnable ?
          (

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
          ) : null}
    </>
  );
};
  
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
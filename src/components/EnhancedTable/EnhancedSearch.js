import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextField , InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PrimaryButton from '../Buttons/PrimaryButton';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import {
  Button
} from '@material-ui/core';
import DatePicker from '../common/DatePicker';
  
function EnhancedSearch(props) {
  const {classes, searchFilter, headCell, type, list} = props;
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setVisible((visible) => !visible);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    hideIt();
  };
  
  const hideIt = () => {
    setVisible(false);
  };

  const setSearchText = (value) => {
    setSearch(value);
  };

  const searchData = () => {
    searchFilter(headCell.searchKey, search);
    hideIt();
  };

  const resetSearchData = () => {
    if(search)
      searchFilter(headCell.searchKey, '');
    setSearch('');
    hideIt();
  };

  return (
    <Grid
      className={classes.searchIconWrapper + ' ' + (search ? classes.activeSearch : null)}
      aria-controls={visible ? 'menu-list-grow' : undefined}
      aria-haspopup="true"
      ref={anchorRef}
    >
      <span 
        className={'filter-icon icon-filter ' + (search ? 'active' : null)}
        onClick={handleToggle}></span>
      <Popper style={{zIndex: 10}} open={visible} anchorEl={anchorRef.current}  role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin:  'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <Grid container style={{
                  borderRadius: '4px',
                  padding: '15px',
                  width: '285px',
                  boxShadow: '0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05)',
                  backgroundColor: '#ffffff'
                }}>
                  <Grid container >
                    {
                      type === 'list' ? (
                        <FormControl component="fieldset">
                          <RadioGroup aria-label="gender" name="gender1" value={search} onChange={(e)=>setSearchText(e.target.value)}>
                            {
                              list.map((ele, index) => {
                                return (<FormControlLabel key={index} value={ele.value} control={<Radio />} label={ele.label} />);

                              })
                            }
                          </RadioGroup>
                        </FormControl>
                      ) :
                        type === 'date' ?
                          <DatePicker selectedDate={search}
                            onChange={e => setSearchText(e)}
                          /> 
                          :
                          <TextField
                            style={{width: '100%'}}
                            placeholder="Search"
                            variant="outlined"
                            size="small"
                            value={search}
                            onChange={(e) => setSearchText(e.target.value)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment>
                                  <IconButton style={{padding: '0px'}}>
                                    <SearchIcon/>
                                  </IconButton>
                                </InputAdornment>
                              ),
                              classes: {
                                adornedStart: classes.adornedStart
                              }
                            }}

                          />
                    }
                    
                  </Grid>
                  <Grid container style={{    
                    marginTop: '15px',
                    marginBottom: '5px'}}>
                    <Grid item  sm={6}>
                      <Button style={{width: '100%', height: '100%', fontWeight: 600, color: '#9ea0a5'}} onClick={()=>resetSearchData()}>
                        RESET
                      </Button> 
                    </Grid>
                    <Grid item  sm={6}>
                      <PrimaryButton style={{fontWeight: 600}} onClick={()=>searchData()}>
                        Search
                      </PrimaryButton>
                    </Grid>  
                  </Grid>
                </Grid>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Grid>
  );
};
  
EnhancedSearch.propTypes = {
};
  

export default EnhancedSearch;
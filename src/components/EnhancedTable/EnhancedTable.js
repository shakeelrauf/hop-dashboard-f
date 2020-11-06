import React, { useEffect, useState } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { EnhancedTableContainer } from './EnhancedTableContainer';
import { enhancedTableStyle } from '../../config/MeterialCustomization';
import PropTypes from 'prop-types';
import { api } from '../../api/patientsApi';
import { getAuthHeaders } from '../../Utils/Common';

export function EnhancedTable(props) {
  const { data=[], headCells=[], async, selectedSearchKeys=[], url } = props;
  const classes = enhancedTableStyle();
  const [order, setOrder] = useState('ASC');
  const [orderBy, setOrderBy] = useState('');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsCount, setRowsCount] = useState(0);
  const [rows, setRows] = useState([]);
  const [originalRows, setOriginalRows] = useState([]);
  const [searchKeys,setSearchKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const keys = headCells.map(e => {
    return e.key;
  }); 
  const handleRequestSort = (event, property) => {
    const isASC = orderBy === property && order === 'ASC';
    setOrder(isASC ? 'DESC' : 'ASC');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if(selectedSearchKeys.length > 0)
      setSearchKeys(selectedSearchKeys);
    setOriginalRows(data);
    if(async){
      setLoading(true);
      let data = `${url}?skip=${(rowsPerPage*(page+1))- (rowsPerPage)}&limit=${rowsPerPage}&sort=${order}&orderBy=${orderBy}`; 
      loadAsyncData(data);
    }else{
      setRows(data);
      setRowsCount(data.length);
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[async, page, rowsPerPage, order, orderBy]);

  const loadAsyncData = (data) => {
    if(searchKeys)
      data = data + '&filterBy=' +filterByParamValue();
    api.get(data, {}, { data: null, headers: getAuthHeaders()  }).then(res => {
      if(res.data.response.patients === null)
        res.data.response.patients = [];
      setRows(res.data.response.patients);
      setOriginalRows(res.data.response.patients);
      setRowsCount(res.data.response.total);
    }).catch(error => {
      console.error('Could not get RECORDS');
    }).finally(()=>{
      setLoading(false);
    });
  };

  const filterByParamValue = () =>{
    let keyValues = {};
    searchKeys.forEach(ele => {
      keyValues[ele.key] = ele.value;
    });
    return btoa(JSON.stringify(keyValues));
  };

  const searchFilter = (key,search) => {
    let data = originalRows;
    let searchKeysArray = searchKeys;
    if(search){
      searchKeysArray = removeItemAll(searchKeys, key);
      searchKeysArray.push({key: key, value: search});
    }else{
      searchKeysArray = removeItemAll(searchKeys, key);
    }
    setSearchKeys(searchKeysArray);
    if(async === true){
      setLoading(true);
      let data = `${url}?skip=${(rowsPerPage*(page+1))- (rowsPerPage)}&limit=${rowsPerPage}&sort=${order}&orderBy=${orderBy}`; 
      loadAsyncData(data);
    }else{
      if(searchKeys.length > 0){
        searchKeys.forEach(searchKey => {
          data = data.filter(ele => ele[searchKey.key].toString().toLocaleLowerCase().indexOf(searchKey.value.toLocaleLowerCase()) > -1 );
        });
      }
      setRows(data);
      setRowsCount(data.length);
      setLoading(false);
    }
  };

  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i].key === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  return(
    <div className={classes.root} style={{padding: '5px'}}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar setSelected={setSelected}  />
        <EnhancedTableContainer 
          selected={selected} 
          rows={rows}
          loading={loading}
          keys={keys}
          emptyRows={emptyRows}
          page={page} 
          searchKeys={searchKeys}
          searchFilter={searchFilter}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy={orderBy} 
          headCells={headCells} 
          handleSelectAllClick={handleSelectAllClick} 
          handleRequestSort={handleRequestSort} 
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          style={{color: '#9ea0a5'}}
          count={rowsCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};


var headCell = PropTypes.shape({
  searchKey: function(props, propName, componentName) {
    if ((props['search'] !== false && (props[propName] === undefined || typeof(props[propName]) != 'string'))) {
      return new Error('Please provide a search Key or set search false!');
    }
  },
  sortKey: function(props, propName, componentName) {
    if ((props['sort'] !== false && (props[propName] === undefined || typeof(props[propName]) != 'string'))) {
      return new Error('Please provide a `sortKey` or set `sort` false!');
    }
  },
  numeric: PropTypes.bool.isRequired,
  disablePadding: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  key: function(props, propName, componentName) {
    if(props[propName] === undefined || (!['object', 'array', 'string'].includes(typeof(props[propName])))){
      return new Error('Please provide `key` of type `array` or `string');
    }
  }
});
EnhancedTable.propTypes = {
  headCells: PropTypes.arrayOf(headCell).isRequired,
  data: PropTypes.array,
  async: PropTypes.bool.isRequired
};

EnhancedTable.defaultProps = {
  async: false,
  headCells: [{
    numeric: false,
    disablePadding: true
  }]
};
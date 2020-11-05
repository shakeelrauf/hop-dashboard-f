import React, { useEffect, useState } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { EnhancedTableContainer } from './EnhancedTableContainer';
import { enhancedTableStyle } from '../../config/MeterialCustomization';
import PropTypes from 'prop-types';
import api from '../../api/patientsApi';

export function EnhancedTable(props) {
  const { data=[], headCells=[], async, deleteCallback, searchEnable} = props;
  const classes = enhancedTableStyle();
  const [order, setOrder] = useState('ASC');
  const [orderBy, setOrderBy] = useState('');
  const [search, setSearch] = useState();
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

  const handleDelete = (values) => {
    let data = rows;
    var filtered = data.filter(function (el) {
      return el != null;
    });
    setRowsCount(filtered.length);
    setRows(filtered);
    deleteCallback(values);
  };

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

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(IDBKeyRange);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setOriginalRows(data);
    if(async){
      setLoading(true);
      let data = `skip=${(rowsPerPage*(page+1))- (rowsPerPage)}&limit=${rowsPerPage}&order=${order}&orderBy=${orderBy}`; 
      searchKeys.forEach(sK => {
        data += `&${sK.key}=${sK.value}`;
      });
      loadAsyncData(data);
    }else{
      setRows(data);
      setRowsCount(data.length);
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[async, page, rowsPerPage, order, orderBy]);

  const loadAsyncData = (data) => {
    api.getPatients(data).then(res => {
      setRows(res.data.response.patients);
      setOriginalRows(res.data.response.patients);
      setRowsCount(res.data.response.total);
    }).catch(error => {
      console.error('Could not get RECORDS');
    }).finally(()=>{
      setLoading(false);
    });
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
      let data = `skip=${(rowsPerPage*(page+1))- (rowsPerPage)}&limit=${rowsPerPage}&order=${order}&orderBy=${orderBy}`; 
      searchKeys.forEach(sK => {
        data += `&${sK.key}=${sK.value}`;
      });
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
        <EnhancedTableToolbar setSelected={setSelected} searchEnable={searchEnable} search={search} setSearch={setSearch} handleDelete={handleDelete} selected={selected} numSelected={selected.length} />
        <EnhancedTableContainer 
          selected={selected} 
          rows={rows}
          loading={loading}
          keys={keys}
          emptyRows={emptyRows}
          page={page} 
          searchFilter={searchFilter}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy={orderBy} 
          headCells={headCells} 
          handleSelectAllClick={handleSelectAllClick} 
          handleRequestSort={handleRequestSort} 
          handleClick={handleClick}
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

EnhancedTable.propTypes = {
  headCells: PropTypes.array.isRequired,
};
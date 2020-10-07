import React, { useEffect, useState } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { EnhancedTableContainer } from './EnhancedTableContainer';
import { enhancedTableStyle } from '../../config/MeterialCustomization';
import PropTypes from 'prop-types';
import axios from 'axios';

export function EnhancedTable(props) {
  const { data=[], headCells=[], async, url, deleteCallback} = props;
  const classes = enhancedTableStyle();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [search, setSearch] = useState();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsCount, setRowsCount] = useState(0);
  const [asyncRows, setAsyncRows] = useState([]);
  const [rows, setRows] = useState([]);
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
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
    if(async){
      let urlEncoded = `${url}?index=${page * rowsPerPage - (rowsPerPage - 1)}&limit${rowsPerPage}&order${order}&orderBy${orderBy}`; 
      if(search)
        urlEncoded = urlEncoded + '&search=' + search;
      axios.get(urlEncoded).then(res => {
        setAsyncRows(res.data);
        setRowsCount(res.data.length);
      }).catch(error => {
        console.error('Could not get RECORDS');
      });
    }else{
      let filteredData = data;
      if(search){
        filteredData = filteredData.filter(obj => {
          let values = [];
          for(var key in obj) {
            values.push(obj[key]);
          }
          return values.filter(ele => ele.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1 ).length > 0;
        });
      }
      setRows(filteredData);
      setRowsCount(filteredData.length);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search]);
  return(
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar setSelected={setSelected} search={search} setSearch={setSearch} handleDelete={handleDelete} selected={selected} numSelected={selected.length} />
        <EnhancedTableContainer 
          selected={selected} 
          rows={rows} 
          keys={keys}
          asyncRows={asyncRows}
          emptyRows={emptyRows}
          page={page} 
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
  data: PropTypes.array.isRequired,
  headCells: PropTypes.array.isRequired,
};
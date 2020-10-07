import React from 'react';
import { EnhancedTableHead } from './EnhancedTableHead';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { enhancedTableStyle } from '../../config/MeterialCustomization';
import { EnhancedTableBody } from './EnhancedTableBody';
import PropTypes from 'prop-types';

export  function EnhancedTableContainer(props) {
  const { selected,asyncRows, rows, keys, emptyRows, page, rowsPerPage, order, orderBy, headCells, handleSelectAllClick, handleRequestSort, handleClick } = props;
  const classes = enhancedTableStyle();

  return (
    <TableContainer>
      <Table
        className={classes.table}
        aria-labelledby="tableTitle"
        size={'medium'}
        aria-label="enhanced table"
      >
        <EnhancedTableBody 
          rows={rows}
          asyncRows={asyncRows}
          order={order}
          keys={keys}
          orderBy={orderBy} 
          page={page} 
          rowsPerPage={rowsPerPage} 
          selected={selected} 
          handleClick={handleClick} 
          emptyRows={emptyRows} 
        />
        <EnhancedTableHead
          classes={classes}
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          headCells={headCells}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
      </Table>
    </TableContainer>
  );
};

EnhancedTableContainer.propTypes = {
  rows: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  emptyRows: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
  headCells: PropTypes.array.isRequired,
};
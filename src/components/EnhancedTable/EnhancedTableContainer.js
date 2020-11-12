import React from 'react';
import { EnhancedTableHead } from './EnhancedTableHead';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { enhancedTableStyle } from '../../config/MeterialCustomization';
import { EnhancedTableBody } from './EnhancedTableBody';
import PropTypes from 'prop-types';

export  function EnhancedTableContainer(props) {
  const { loading,async, searchFilter, searchKeys, selected, rows, keys, emptyRows, page, rowsPerPage, order, orderBy, headCells, handleSelectAllClick, handleRequestSort, handleClick } = props;
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
          async={async}
          order={order}
          keys={keys}
          headCells={headCells}
          orderBy={orderBy} 
          loading={loading}
          page={page} 
          rowsPerPage={rowsPerPage} 
          selected={selected} 
          handleClick={handleClick} 
          emptyRows={emptyRows} 
          {...props}
        />
        <EnhancedTableHead
          classes={classes}
          order={order}
          searchKeys={searchKeys}
          orderBy={orderBy}
          searchFilter={searchFilter}
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
  handleSelectAllClick: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['ASC', 'DESC']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  emptyRows: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
  headCells: PropTypes.array.isRequired,
};
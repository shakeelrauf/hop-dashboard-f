import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import { EnhancedRow } from './EnhancedRow';

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}  


function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
  
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
  
export function EnhancedTableBody(props) {
  const { rows, order, asyncRows, async, keys, orderBy, page, rowsPerPage, selected, handleClick, emptyRows } = props;
  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <TableBody>
      {
        async ?
          asyncRows.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <EnhancedRow keys={keys} key={labelId} row={row} isItemSelected={isItemSelected} labelId={labelId} handleClick={handleClick}/>
            );
          })
          :
          stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <EnhancedRow keys={keys} key={labelId} row={row} isItemSelected={isItemSelected} labelId={labelId} handleClick={handleClick}/>
              );
            })
      }
      {emptyRows > 0 && (
        <TableRow style={{ height: (53) * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

EnhancedTableBody.propTypes = {
  rows: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  emptyRows: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
};
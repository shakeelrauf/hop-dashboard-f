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
  const { rows, loading, order, headCells, keys, orderBy, page, rowsPerPage, selected, handleClick, emptyRows } = props;
  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <TableBody>
      {
        loading ? 
          <TableRow style={{ height: (53) * emptyRows }}>
            <TableCell colSpan={6} style={{textAlign: 'center'}} >Loading....</TableCell>
          </TableRow>
          :
          <>
            {
              stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <EnhancedRow headCells={headCells} keys={keys} key={labelId} row={row} isItemSelected={isItemSelected} labelId={labelId} handleClick={handleClick}/>
                  );
                })
            }
            <TableRow style={{ height: (53) * emptyRows }}>
              {
                emptyRows === 0  ?
                  <TableCell style={{textAlign: 'center'}} colSpan={6} >No Data found</TableCell>
                  : 
                  null
              }     
            </TableRow>
          </>
      }
      
    </TableBody>
  );
};

EnhancedTableBody.propTypes = {
  rows: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['ASC', 'DESC']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  emptyRows: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
};
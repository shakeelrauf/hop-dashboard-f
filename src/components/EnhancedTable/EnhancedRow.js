import React, { Fragment } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';

export function EnhancedRow(props) {
  const { row, keys, isItemSelected, labelId, handleClick } = props;

  return (
    <TableRow
      onClick={(event) => handleClick(event, row.id)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
    >
      {
        keys.length > 0 ? 
          keys.map((objectKey, index) => {
            var value = row[objectKey];
            console.log(value);
            if(index === 0){
              return (
                <Fragment key={objectKey}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell id={labelId} padding="none">
                    {value}
                  </TableCell>
                </Fragment>
              );
            }else{
              return (
                <TableCell align="right" key={objectKey}>{value}</TableCell>
              );
            }
          })
          :
          Object.keys(row).map((objectKey, index) => {
            var value = row[objectKey];
            console.log(value);
            if(index === 0){
              return (
                <Fragment key={objectKey}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell id={labelId} padding="none">
                    {value}
                  </TableCell>
                </Fragment>
              );
            }else{
              return (
                <TableCell align="right" key={objectKey}>{value}</TableCell>
              );
            }
          })
      }
    </TableRow>
  );
};
EnhancedRow.propTypes = {
  row: PropTypes.object.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  labelId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
  
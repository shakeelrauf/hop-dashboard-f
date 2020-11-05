import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';

export function EnhancedRow(props) {
  const { row, headCells, isItemSelected } = props;

  return (
    <TableRow
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
    >
      {
        headCells.length > 0 ? 
          headCells.map((headCell, index) => {
            let value = '';
            if(Array.isArray(headCell.key)){
              headCell.key.forEach(key => {
                value = (value + ' ' + row[key]);
              });
            }else{
              value = row[headCell.key];
            }
            // console.log(value);
            // if(index === 0){
            //   return (
            //     <Fragment key={objectKey}>
            //       <TableCell padding="checkbox">
            //         <Checkbox
            //           checked={isItemSelected}
            //           inputProps={{ 'aria-labelledby': labelId }}
            //         />
            //       </TableCell>
            //       <TableCell id={labelId} padding="none">
            //         {value}
            //       </TableCell>
            //     </Fragment>
            //   );
            // }else{
            return (
              <TableCell align="left" key={index} style={{fontSize: '14px'}}>
                {headCell.render ? <headCell.render value={value}/> : value}
              </TableCell>
            );
          })
          :
          Object.keys(row).map((objectKey, index) => {
            var value = row[objectKey];
            // if(index === 0){
            //   return (
            //     <Fragment key={objectKey}>
            //       <TableCell padding="checkbox">
            //         <Checkbox
            //           checked={isItemSelected}
            //           inputProps={{ 'aria-labelledby': labelId }}
            //         />
            //       </TableCell>
            //       <TableCell id={labelId} padding="none">
            //         {value}
            //       </TableCell>
            //     </Fragment>
            //   );
            // }else{
            return (
              <TableCell align="left" key={objectKey}>{value}</TableCell>
            );
            // }
          })
      }
    </TableRow>
  );
};
EnhancedRow.propTypes = {
  row: PropTypes.object.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  labelId: PropTypes.string.isRequired,
};
  
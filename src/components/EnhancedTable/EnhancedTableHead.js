import React from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EnhancedSearch from './EnhancedSearch';
import SvgIcon from '@material-ui/core/SvgIcon';
import { createStyles, withStyles } from '@material-ui/styles';

const StyledTableSortLabel = withStyles((theme) =>
  createStyles({
    root: {
      '&:hover': {
      },
      '&$active': {
      },
    },
    active: {},
    icon: {
      color: 'inherit !important'
    },
  })
)(TableSortLabel);
export function EnhancedTableHead(props) {
  const { classes, searchKeys, searchFilter, order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.label}
            align={'left'}
            sortDirection={orderBy === headCell.sortKey ? order.toLowerCase() : false}
          >
            <div 
              className={classes.tableHead}>
              {
                headCell.sort === false ?
                  headCell.label 
                  :
                  <StyledTableSortLabel
                    active={orderBy === headCell.sortKey}
                    direction={orderBy === headCell.sortKey ? order.toLowerCase() : 'asc'}
                    IconComponent={ArrowDropDownIcon}
                    className={classes.sortTable}
                    onClick={createSortHandler(headCell.sortKey)}
                  >
                    {headCell.label}
                    {orderBy !== headCell.sortKey ? (
                      <span className={classes.arrows}>
                        <SvgIcon viewBox="0 0 1024 1024" fontSize="small"  className={classes.arrow}>
                          <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"/>
                        </SvgIcon>
                        <SvgIcon viewBox="0 0 1024 1024" fontSize="small"  className={classes.arrow}>
                          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"/>
                        </SvgIcon>
                      </span>
                    ) : null}
                  </StyledTableSortLabel>
              }
              {
                headCell.search === false ?
                  null 
                  : 
                  <EnhancedSearch searchKeys={searchKeys} type={headCell.type} list={headCell.list} searchFilter={searchFilter} headCell={headCell} classes={classes}/>
              }
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
  
EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['ASC', 'DESC']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
  
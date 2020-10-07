import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { EnhancedTable } from '../../components/EnhancedTable';


function createData(id, name,  email, age, carbs, protein) {
  return { id, name, email, age, carbs, protein };
}
  
const dummyData = [
  createData(0,'Dennis', 'saximaq@mailinator.com', 21, 67, 4.3),
  createData(1, 'Lucy', 'bumelyqe@mailinator.com', 25, 51, 4.9),
  createData(2, 'Simpson', 'qyfagel@mailinator.net', 16, 24, 6.0),
  createData(3, 'Frozen Solomon', 'cekab@mailinator.net', 6, 24, 4.0),
  createData(4, 'Gingerbread', 'fesa@mailinator.net', 45, 49, 3.9),
  createData(5, 'Adria', 'qyhijo@mailinator.net', 33, 87, 6.5),
  createData(6, 'Washington', 'naluz@mailinator.com', 39, 37, 4.3),
  createData(7, 'Tarik Bean', 'medehizuqo@mailinator.com', 10, 94, 0.0),
  createData(8, 'Bowen', 'woluze@mailinator.com', 21, 65, 7.0),
  createData(9, 'Hernandez', 'muhuqy@mailinator.com', 34, 98, 0.0),
  createData(10, 'Winifred', 'xacubocyjo@mailinator.net', 61, 81, 2.0),
];
  
const headCells = [
  { key: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { sortKey: 'email', key: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { sortKey: 'age', key: 'age', numeric: true, disablePadding: false, label: 'Age' },
  { sortKey: 'carbs', key: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { sortKey: 'protein', key: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
  
export const TablePage = () => {
  const [data, setData] = useState(dummyData);
  const handleDelete = (values) => {
    let dummyData = data;
    values.forEach(val => {
      delete dummyData[dummyData.findIndex(row => row && row.id === val)];
    });
    setData(dummyData);
  };

  return(
    <Paper
      variant="elevation"
      elevation={2}
      className="login-background"
    >
      <Button
        variant='contained'
        color="primary"
        component={Link}
        to={'/new'}
        className="button-block"
      >
        NEW
      </Button>
      <Typography>
      </Typography>
      <EnhancedTable deleteCallback={handleDelete} data={data} headCells={headCells}/>
    </Paper>
  );
};

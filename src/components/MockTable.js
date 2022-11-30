import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(username, name,type , branch, year, btn) {
  return {username, name,type, branch, year, btn };
}

const rows = [
  createData('YoKash','Kashish', 'Human Resource', 'CO', 'Second', <Button  variant="contained" color="secondary">Interview</Button>),
  createData('YoKash', 'Kartik', 'DS and Algo', 'CO', 'Third', <Button  variant="contained" color="secondary">Interview</Button>),
  createData('YoKash', 'Kashish', 'DS and Algo', 'CO', 'Second', <Button  variant="contained" color="secondary">Interview</Button>),
  createData('YoKash', 'Kashish', 'DS and Algo', 'CO', 'Second', <Button  variant="contained" color="secondary">Interview</Button>),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <div className="mockICHeading" style={{padding:'10px'}}>Recent People</div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Branch</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.branch}</TableCell>
              <TableCell align="center">{row.year}</TableCell>
              <TableCell align="center">{row.btn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

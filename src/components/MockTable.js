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

function createData(EventName, EventDate, btn) {
  return {EventName, EventDate, btn };
}

const rows = [
  createData('International Conferance On International Technology','14-10-2021', <Button  variant="contained" color="secondary">View</Button>),
  createData('Workshop on Electric Vehicles Technologies', '11-08-2021', <Button  variant="contained" color="secondary">View</Button>),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <div className="mockICHeading" >Past Events</div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell >EventName</TableCell>
            <TableCell >EventDate</TableCell>
            <TableCell >Get Links</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.username} style={{marginLeft:"-40px"}}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell >{row.EventName}</TableCell>
              <TableCell >{row.EventDate}</TableCell>
              <TableCell >{row.btn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

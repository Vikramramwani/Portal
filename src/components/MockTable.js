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
import { useState , useEffect} from 'react';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 10,
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
  const [dat,setDat]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/events").then((res)=>{
        console.log(res.data.students);
        setDat(res.data.students);
    }).catch((err)=>{
        console.log(err);
    })
},[])


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell >EventName</TableCell>
            <TableCell >EventDate</TableCell>
            <TableCell >End Date</TableCell>
            <TableCell >Start time</TableCell>
            <TableCell >End time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dat.map(row => (
            <TableRow key={row.title} style={{marginLeft:"-40px"}}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell >{row.start_date}</TableCell>
              <TableCell >{row.end_date}</TableCell>
              <TableCell >{row.start_time}</TableCell>
              <TableCell >{row.end_time}</TableCell>
              <TableCell >{row.btn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

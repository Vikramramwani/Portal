import React from 'react';
import '../styles/Mock.css';

import { Button, Grid, Paper, TextField, MenuItem, InputBase } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

import MockTable from './MockTable'

const currencies = [
    {
        value: 'USD',
        label: 'Human Resource',
    },
    {
        value: 'EUR',
        label: 'DS and Algo',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const SmallAvatar = withStyles(theme => ({
    root: {
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: 60,
        height: 60,
    },
    root2: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 650,
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
}));

function Mock() {
    const classes = useStyles();
    const [selectedstartDate, setSelectedStartDate] = React.useState("");
    const [selectedEndDate, setSelectedEndDate] = React.useState("");
    const [selectedstarttime, setSelectedStartTime] = React.useState("");
    const [selectedendtime, setSelectedEndTime] = React.useState("");
    const [title, setTitle] = React.useState("");

    

    const handleSubmit = () =>{
        let d=
            {
                "title" : title,
                "start_date" : selectedstartDate,
                "end_date" : selectedEndDate,
                "start_time" : selectedstarttime ,
                "end_time" : selectedendtime 
            }
            console.log(title);
            console.log(selectedEndDate);
            console.log(selectedstartDate);
            console.log(selectedendtime);
            console.log(selectedEndDate);
        
        axios.post("http://localhost:8000/api/events",d).then((res)=>{
            console.log(res);
            setTitle("");
            setSelectedEndDate("");
            setSelectedStartDate("");
            setSelectedStartTime("");
            setSelectedEndTime("");
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <div className="discussMainContainer" style={{height:"550px"}}>
            <div className="discussFilters" style={{height:"550px"}}>
                <div style={{fontSize: 19, fontWeight: 'bold', textAlign:'center', padding: 15}}>Post Your Query</div>
                <hr className="line"/>
                <div style={{padding : 10}}>
                <TextField id="outlined-basic" label="Heading" variant="outlined"  color='secondary' style={{width:'100%'}} onChange={(e)=>setTitle(e.target.value)} placeholder={title}/>
                <TextField
                  multiline 
                 label="Start Date"
                 variant="outlined"  
                 color='secondary' 
                 style={{width:'100%',marginTop: 20}}
                 placeholder={selectedstartDate} 
                 onChange={(e)=>setSelectedStartDate(e.target.value)}/>
                 <TextField
                  multiline 
                 label="End Date"
                 variant="outlined"  
                 color='secondary' 
                 style={{width:'100%',marginTop: 20}}
                 placeholder={selectedEndDate} 
                 onChange={(e)=>setSelectedEndDate(e.target.value)}/>
                 <TextField
                  multiline 
                 label="Start Time"
                 variant="outlined"  
                 color='secondary' 
                 style={{width:'100%',marginTop: 20}}
                 placeholder={selectedstarttime} 
                 onChange={(e)=>setSelectedStartTime(e.target.value)}/>
                 <TextField
                  multiline 
                 label="End Time"
                 variant="outlined"  
                 color='secondary' 
                 style={{width:'100%',marginTop: 20}}
                 placeholder={selectedendtime} 
                 onChange={(e)=>setSelectedEndTime(e.target.value)}/>
                 
                 <Button 
                  variant="contained" 
                  color="secondary"
                  style = {{width: '100%', marginTop: 20}}
                  onClick={handleSubmit}
                  >Post Query</Button>
                </div>
                
            </div>
            <div className="mockTableContainer">
                <MockTable />
            </div>
            
        </div >
    )

}

export default Mock;
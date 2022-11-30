import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TextField, TextareaAutosize } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ReplyIcon from '@material-ui/icons/Reply';

import '../styles/Discuss.css'

function DiscussInternal(props) {
    return (
        <div style={{ padding: 10, display: 'flex', alignItems: 'center' }} >
            <div style={{ flex: 1 }}>
                <b>Trouble with Fibonnaci numbers</b>
                <br />
                <br />
                Hi there ! I am facing troubles with fibonnaci numbers. Can someone please guide me to the next step?
                <br />
                <br />
            </div>
            <div>
                <span style={{fontSize: 14, color: 'rgb(144, 144, 144)'}}>3 replies till now </span>
                &nbsp;	&nbsp;
                <Button variant="outlined" color="secondary">
                    <ReplyIcon />
                    Reply
            </Button>
            </div>

        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 800,
        margin: 'auto',
        marginTop: 50,
        marginBottom: 40
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

function Discuss() {
    const classes = useStyles();
    return (
        <div>
            <div className="mockHome">
                <div className="mockLeft">
                    <img src={require('../assests/discuss.jpg')} height="300px" />
                </div>
                <div className="mockRight">
                    <div className="mockHeading">Discuss Forum.</div>
                    <div className="mockIntro">Interactive discussion forum between students and alumni.</div>
                    <Button variant="contained" color="primary">Ask Query</Button>
                </div>
            </div>

            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search"
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            <div className="discussMainContainer">
                <div className="discussFilters">
                    <div style={{fontSize: 19, fontWeight: 'bold', textAlign:'center', padding: 15}}>Post Your Query</div>
                    <hr className="line"/>
                    <div style={{padding : 10}}>
                    <TextField id="outlined-basic" label="Heading" variant="outlined"  color='secondary' style={{width:'100%'}}/>
                    <TextField
                      multiline 
                     label="Content"
                     variant="outlined"  
                     color='secondary' 
                     style={{width:'100%',marginTop: 20}}
                     placeholder="You can ask your query here, type the detailed description here      	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;"
                     />
                     <Button 
                      variant="contained" 
                      color="secondary"
                      style = {{width: '100%', marginTop: 20}}
                      >Post Query</Button>
                    </div>
                    
                </div>
                <div className="discussContainer">
                    <DiscussInternal />
                    <hr className="line" />
                    <DiscussInternal />
                    <hr className="line" />
                    <DiscussInternal />
                    <hr className="line" />
                    <DiscussInternal />
                    <hr className="line" />
                    <DiscussInternal />
                    <hr className="line" />
                    <DiscussInternal />
                    <hr className="line" />
                    <DiscussInternal />
                    <hr className="line" />
                    <DiscussInternal />
                </div>
            </div>
        </div>
    )
}

export default Discuss;
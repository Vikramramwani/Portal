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

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = event => {
        setCurrency(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-02-16T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <div>
            <div className="mockHome">
                <div className="mockLeft">
                    <img src={require('../assests/mock.png')} height="300px" />
                </div>
                <div className="mockRight">
                    <div className="mockHeading">Mock Interview.</div>
                    <div className="mockIntro">You can schedule a mock interview with your senior or alumni of 45 mins.</div>
                    <Button variant="contained" color="primary">Schedule One</Button>
                </div>
            </div>
            <div className="mockTableContainer">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Paper className="mockInterviewerContainer">
                                <div className="mockICHeading">Take Interview</div>
                                <div className="inputContainer">
                                    <TextField id="outlined-basic" label="Username" variant="outlined" color="secondary" />
                                </div>
                                <div className="inputContainer">
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Select"
                                        value={currency}
                                        onChange={handleChange}
                                        variant="outlined"
                                    >
                                        {currencies.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </div>
                                <div className="inputContainer">
                                    <KeyboardDatePicker
                                        color="secondary"
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <KeyboardTimePicker
                                        color="secondary"
                                        margin="normal"
                                        id="time-picker"
                                        label="Time picker"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </div>
                                <Button variant="outlined" color="secondary">Submit</Button>
                            </Paper>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="mockInterviewerContainer">
                            <div className="mockICHeading">Give Interview</div>
                            <div className="inputContainer">
                                <TextField id="outlined-basic" label="Username" variant="outlined" color="secondary" />
                            </div>
                            <div className="inputContainer">
                                <TextField id="outlined-basic" label="Name" variant="outlined" color="secondary" />
                            </div>
                            <div className="inputContainer">
                                <TextField id="outlined-basic" label="Branch" variant="outlined" color="secondary" />
                            </div>
                            <div className="inputContainer">
                                <TextField id="outlined-basic" label="Year" variant="outlined" color="secondary" />
                            </div>
                            <div className="inputContainer">
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Select"
                                    value={currency}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    {currencies.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <Button variant="outlined" color="secondary">Submit</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div className="mockTableContainer">
                <MockTable />
            </div>
            <div className="mockTableContainer">
                <Paper className="mockInterviewerContainer">
                    <div className="mockICHeading">Interview Section</div>
                    <div className="mockLiveFlex">
                        <div className="mockAvatarContainer">
                            <StyledBadge
                                overlap="circle"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" className={classes.large} src="/static/images/avatar/1.jpg" />
                            </StyledBadge>
                            <br />
                            <br />
                            <span>Rohan Gupta</span>
                        </div>
                        <div className="mockAvatarContainer">
                            <StyledBadge
                                overlap="circle"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                variant="dot"
                            >
                                <Avatar alt="Kemy Sharp" className={classes.large} src="/static/images/avatar/1.jpg" />
                            </StyledBadge>
                            <br />
                            <br />
                            <span>Kartik Verma</span>
                        </div>

                    </div>
                    <div className="alignCenter">
                        <Paper component="form" className={classes.root2}>
                            <InputBase
                                className={classes.input}
                                value="https://docs.google.com/document/d/18taaArN65O6jFzGwox3F_0SvGqlgYfki9T_SUJDAylM/edit"
                                inputProps={{ 'aria-label': 'doc link' }}
                            />
                            <IconButton className={classes.iconButton} aria-label="search">
                                <AssignmentIcon />
                            </IconButton>
                        </Paper>
                    </div>
                </Paper>
            </div>
        </div >
    )

}

export default Mock;
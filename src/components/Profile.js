import React from 'react';
import {Button} from '@material-ui/core'
import '../styles/Profile.css';
import LockIcon from '@material-ui/icons/Lock';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div className="mockHome">
                    <div className="mockLeft">
                        <img src={require('../assests/img5.png')} height="300px" />
                    </div>
                    <div className="mockRight">
                        <div className="mockHeading">User Profile.</div>
                        <div className="mockIntro">Students and alumni can setup a great profile here to boost about there skills.</div>
                        <Button 
                  variant="contained" 
                  color="secondary"
                  style = {{width: '30%', marginTop: 20}}
                //   onClick={submitdetails}
                  >Update Profile</Button>
                        {/* <Button variant="contained" color="primary">Update Profile</Button> */}
                    </div>
                </div>
                <div className="profileNo">
                    <LockIcon style={{height: 25, width: 25}}/>
                    <br/>
                    <br/>
                    <span style={{fontSize: 19, fontWeight: 'bold'}}>Sign In to unlock</span>
                    <br/>
                    <br/>
                    <span>please Sign In to update your profile.</span>
                    <br/>
                    <br/>
                    <br/>   
                    <br/>
                    <Button variant="outlined" color="secondary">Sign In</Button>
                </div>
            </div>
        )
    }
}

export default Profile;
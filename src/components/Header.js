import React from 'react';
import '../styles/Header.css';
import { Button } from '@material-ui/core'
import { height } from '@material-ui/system';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let home = <div className="heading" onClick= {() =>this.props.onChange('home')}>Home</div>
        let discuss = <div className="heading" onClick= {() =>this.props.onChange('discuss')}>Mentorship</div>
        let connect = <div className="heading" onClick= {() =>this.props.onChange('connect')}>Find Alumni</div>
        let mock = <div className="heading" onClick= {() =>this.props.onChange('mock')}>Events</div>
        let profile = <div className="heading" onClick= {() =>this.props.onChange('profile')}>Profile</div>

        if(this.props.current === 'home') {
            home = <div className="heading selected">Home</div>
        }
        if(this.props.current === 'discuss') {
            discuss = <div className="heading selected">Mentorship</div>
        }
        if(this.props.current === 'connect') {
            connect = <div className="heading selected">Find Alumni</div>
        }
        if(this.props.current === 'profile') {
            profile = <div className="heading selected">Profile</div>
        }
        if(this.props.current === 'mock') {
            mock = <div className="heading selected">Events</div>
        }

        return (
            <div className="header">
                <div className="imgContainer">
                    <img src={require('../assests/alu_logo.png') } height="85" />
                </div>
                {home}
                {discuss}
                {profile}
                {connect}
                {mock}
                <div className="btnContainer">
                    <Button variant="outlined" color="primary" onClick= {() =>this.props.onChange('signing')}>Sign In</Button>
                </div>

            </div>
        );
    }
}

export default Header;

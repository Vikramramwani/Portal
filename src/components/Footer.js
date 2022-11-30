import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footerMapImage">
                    <img src={require('../assests/map.jpeg')} style={{height: 250}} />
                </div>
                <div className="footerRight">
                    <span style={{ fontSize: 23, fontWeight: 'bold' }}>Alumni</span>
                    <br />
                    <br />
                    Call us : +91 99991 23456
                    <br />
                    <br />
                    Email : abcd@gmail.com
                    <br />
                    <br />
                    Address : OUTR
                </div>
            </div>
        )
    }
}

export default Footer;
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
                    <span style={{ fontSize: 23, fontWeight: 'bold' }}>Almnater</span>
                    <br />
                    <br />
                    Call us : +91 99991 23456
                    <br />
                    <br />
                    Email : almnater@gmail.com
                    <br />
                    <br />
                    Address : Department of Training and Placement, Yamuna Marg, Delhi Technological University, Shahbad Daulatpur Village, Rohini, Delhi, 110042
                </div>
            </div>
        )
    }
}

export default Footer;
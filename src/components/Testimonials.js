import React from 'react';
import '../styles/Testimonials.css';
import { Button } from '@material-ui/core'

class TestiCard extends React.Component {
    render() {
        return (
            <div className="testiCardContainer">
                <div className='ccAvatorContainer'>
                    <img src={require('../assests/avatar.jpeg')} className="ccAvatarImg" />
                </div>
                <div className='testiCardHead'>{this.props.name}</div>
                <div className='testiCardJobTitle'>{this.props.job}</div>
                <div className="testiJoblogoContainer">
                    <img src={require('../assests/google_logo.png')} className="testiJoblogo" />
                </div>
                <div className="testiDes">
                    {this.props.desc}
                </div>
            </div>
        )
    }
}



class Testimonials extends React.Component {
    render() {
        return (
            <div>
                <div className="testiHead">
                    The vast alumni base speaks for itself
                </div>
                <div className="testiContainer">
                    <TestiCard
                        name="Carlos"
                        job="Software Developer"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    />
                    <TestiCard
                        name="Mandeep Singh"
                        job="Software Developer"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    />
                    <TestiCard
                        name="Carlos"
                        job="Software Developer"
                        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    />
                </div>
                <div style={{textAlign: 'center', margin : 10}}>
                    <Button variant="contained" color="primary">Read More</Button>
                </div>
            </div>
        )
    }
}

export default Testimonials;
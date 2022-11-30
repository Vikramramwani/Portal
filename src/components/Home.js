import React from 'react';
import '../styles/Home.css';
import ConnectCard from './ConnectCard';
import { Paper, Button } from '@material-ui/core'
import Testimonials from './Testimonials';
import About from './About';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="mockHome">
                    <div className="mockLeft">
                        <img src={require('../assests/alu.jpeg')} height="300px" />
                    </div>
                    <div className="mockRight">
                        <div className="mockHeading">PurvChatra Portal</div>
                        <div className="mockIntro">Place to find and interact with alumni</div>
                        <Button variant="contained" color="primary">Know more</Button>
                    </div>
                </div>
                <About/>
                <Paper className="recConnect">
                    <span className="rcHead">PEOPLE FROM YOUR COLLEGE, YOU MIGHT KNOW</span>
                    <div style={{overflow: 'auto'}}>
                        <ConnectCard
                            name="Mandeep Singh"
                            post="Google Step Intern 2020"
                            mutualConnects="164"
                        />
                        <ConnectCard
                            name="Kashish"
                            post="Facebook Intern 2020"
                            mutualConnects="84"
                        />
                        <ConnectCard
                            name="Kushal Aggarwal"
                            post="Tower Research 2020"
                            mutualConnects="7"
                        />
                        <ConnectCard
                            name="Kashish"
                            post="Facebook Intern 2020"
                            mutualConnects="84"
                        />
                        <ConnectCard
                            name="Kushal Aggarwal"
                            post="Tower Research 2020"
                            mutualConnects="7"
                        />
                         <ConnectCard
                            name="Kashish"
                            post="Facebook Intern 2020"
                            mutualConnects="84"
                        />
                    </div>
                </Paper>
                <Testimonials />
            </div>
        )
    }
}

export default Home;
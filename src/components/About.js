import React from 'react';
import '../styles/About.css';
import { Button } from '@material-ui/core'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

class AboutCard1 extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="aboutHeader">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.559 194.559" fill="rgb(98, 110, 227)" className="aboutLogo"><path d="M58.026 0h-51.2a3.413 3.413 0 00-3.413 3.413v51.2a3.413 3.413 0 003.413 3.413h51.2a3.413 3.413 0 003.413-3.413v-51.2A3.413 3.413 0 0058.026 0zm-3.414 51.2H10.239V6.827h44.373V51.2z"></path><path d="M42.304 13.93a3.4 3.4 0 00-4.482 1.794L29.567 34.98l-3.261-3.26a3.412 3.412 0 10-4.826 4.826l6.827 6.827a3.411 3.411 0 005.55-1.07l10.24-23.893a3.414 3.414 0 00-1.793-4.48zM58.026 68.267h-51.2a3.413 3.413 0 00-3.413 3.413v51.2a3.413 3.413 0 003.413 3.413h51.2a3.414 3.414 0 003.413-3.413v-51.2a3.413 3.413 0 00-3.413-3.413zm-3.414 51.2H10.239V75.093h44.373v44.374z"></path><path d="M42.304 82.197a3.397 3.397 0 00-4.482 1.794l-8.255 19.256-3.261-3.26a3.412 3.412 0 10-4.826 4.826l6.827 6.827a3.411 3.411 0 005.55-1.07l10.24-23.893a3.414 3.414 0 00-1.793-4.48zM58.026 136.533h-51.2a3.413 3.413 0 00-3.413 3.413v51.2a3.413 3.413 0 003.413 3.413h51.2a3.413 3.413 0 003.413-3.413v-51.2a3.414 3.414 0 00-3.413-3.413zm-3.414 51.2H10.239V143.36h44.373v44.373zM180.906 3.413h-102.4a3.413 3.413 0 100 6.826h102.4a3.413 3.413 0 100-6.826zM146.772 27.307H78.506a3.413 3.413 0 100 6.826h68.267a3.413 3.413 0 10-.001-6.826zM143.359 71.68H78.506a3.413 3.413 0 100 6.826h64.853a3.413 3.413 0 100-6.826zM187.733 95.573H78.506a3.413 3.413 0 100 6.826h109.227a3.413 3.413 0 100-6.826zM119.466 139.947h-13.653a3.413 3.413 0 100 6.826h13.653a3.413 3.413 0 100-6.826zM92.16 139.947H78.506a3.413 3.413 0 100 6.826H92.16a3.413 3.413 0 100-6.826zM174.079 139.947h-13.653a3.413 3.413 0 100 6.826h13.653a3.413 3.413 0 100-6.826zM146.772 139.947h-13.653a3.413 3.413 0 100 6.826h13.653a3.413 3.413 0 100-6.826zM92.16 163.84H78.506a3.413 3.413 0 100 6.826H92.16a3.413 3.413 0 100-6.826zM119.466 163.84h-13.653a3.413 3.413 0 100 6.826h13.653a3.413 3.413 0 100-6.826zM139.947 163.84h-6.827a3.413 3.413 0 100 6.826h6.827a3.413 3.413 0 100-6.826z"></path></svg> */}
                  {/* <img src={require('../assests/directory.png')} className="directory" /> */}
                    <br />
                    <br />
                   ALumni Directory
                </div>
                <div className="aboutContent">
                   Get information about all the alumni
                </div>
            </div>
        )
    }
}


class AboutCard2 extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="aboutHeader">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470" fill="rgb(98, 110, 227)" className="aboutLogo"><path d="M167.313 209.123a7.498 7.498 0 00-10.281-2.605l-87.369 52.039a7.499 7.499 0 00-.001 12.886l87.369 52.039a7.495 7.495 0 0010.281-2.605 7.5 7.5 0 00-2.605-10.281L88.156 265l76.551-45.596a7.499 7.499 0 002.606-10.281zM302.688 320.877a7.494 7.494 0 0010.281 2.605l87.369-52.039a7.5 7.5 0 000-12.886l-87.369-52.039a7.498 7.498 0 00-10.281 2.605 7.5 7.5 0 002.605 10.281L381.844 265l-76.551 45.596a7.497 7.497 0 00-2.605 10.281zM263.72 208.78l-69.893 104.078a7.5 7.5 0 1012.453 8.362l69.893-104.078a7.5 7.5 0 10-12.453-8.362z"></path><path d="M462.5 22.5H7.5A7.5 7.5 0 000 30v410a7.5 7.5 0 007.5 7.5h455a7.5 7.5 0 007.5-7.5v-80c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v72.5H15v-335h440V330c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V30a7.5 7.5 0 00-7.5-7.5zM15 37.5h277.5v45H15v-45zm292.5 45v-45H455v45H307.5z"></path><path d="M381.5 52c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM340.5 52c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM422.5 52c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg> */}
                {/* <img src={require('../assests/college.png')} className="directory" /> */}
                    <br />
                    <br />
                    Your Batchmates
                </div>
                <div className="aboutContent">
                    Find your batchmates here from different colleges.              </div>
            </div>
        )
    }
}

class AboutCard3 extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="aboutHeader">
                    {/* <img src={require('../assests/college1.png')} className="directory" /> */}
                    <br />
                    <br />
                   colleges of OUTR
                </div>
                <div className="aboutContent">
                   Find diffrent colleges in university.
                </div>
            </div>
        )
    }
}


class About extends React.Component {
    render() {
        return (
            <div>
                <div className="testiHead">
                    About PurvChatra
                </div>
                
                <div className="testiContainer2">
                    <AboutCard1 />
                    <AboutCard2 />
                    <AboutCard3 />

                </div>
            </div>
        )
    }
}

export default About;
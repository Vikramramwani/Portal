import React from "react";
import "../styles/About.css";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiBankLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";

class AboutCard1 extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="aboutHeader">
                 
                    <div >
                    <RiGitRepositoryLine size={50}  color={'#4e77e3'}/>
                    </div>
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
               
                   <div>
                   <RiContactsLine size={50} color={'#4e77e3'}/>
                   </div>
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
                    <div style={{size:'100px'}}>
                    <RiBankLine size={50}  color={'#4e77e3'}/>
                    </div>
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
        <div className="testiHead">About PurvChatra</div>

        <div className="testiContainer2">
          <AboutCard1 />
          <AboutCard2 />
          <AboutCard3 />
        </div>
      </div>
    );
  }
}

export default About;

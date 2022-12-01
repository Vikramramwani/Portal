import React , {useEffect} from 'react';
import '../styles/Home.css';
import ConnectCard from './ConnectCard';
import { Paper, Button } from '@material-ui/core'
import Testimonials from './Testimonials';
import About from './About';
import axios from 'axios';
import {useState} from 'react';


export default function Home() {
    const [st,setSt]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/infoRegister").then((res)=>{
            console.log(res.data.Data);
            setSt(res.data.Data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

        return (
            <div>
                <div className="mockHome">
                    <div className="mockLeft">
                        <img src={require('../assests/img2.png')} height="300px" />
                    </div>
                    <div className="mockRight">
                        <div className="mockHeading" >PurvChatra Portal</div>
                        <div className="mockIntro">Place to find and interact with alumni</div>
                        {/* <Button variant="contained" color="secondary">Know more</Button> */}
                    </div>
                </div>
                <About/>
                <Paper className="recConnect">
                    <span className="rcHead">PEOPLE FROM YOUR COLLEGE, YOU MIGHT KNOW</span>
                    <div style={{overflow: 'auto'}}>

                        <ConnectCard
                            name="Kunal Rawat"
                            post="Google Step Intern 2020"
                            mutualConnects="164"
                        />
                       

                       {st.map((ele)=>
                       <ConnectCard
                       name={ele.name}
                       post={ele.role}
                       email={ele.email}
                   />
                       ) }

                    </div>
                </Paper>
               <Testimonials />
            </div>
        )
    }

import React from 'react';
import '../styles/Connect.css';
import ConnectCard from './ConnectCard';
import { Paper} from '@material-ui/core';
import {useState , useEffect} from 'react'
import axios from 'axios';
export default function Connect(){

        const [st,setSt]=useState([])
        useEffect(() => {
          axios.get("http://localhost:8000/api/infoRegister").then((res)=>{
            // setSt(res.data);
            console.log(res.data);
            setSt(res.data.Data);
          }).catch((err)=>{
            console.log(err);
          })
        }, [])
        
        return (
            <div>
             <Paper className="recConnect">
                    <span className="rcHead">PEOPLE FROM YOUR COLLEGE, YOU MIGHT KNOW</span>
                    <div style={{overflow: 'auto'}}>
                    {st.map((ele)=>
                       <ConnectCard
                       name={ele.name}
                       post={ele.role}
                       email={ele.email}
                   />
                       ) }
                    </div>
                </Paper>
               
        </div>
        )

    }
import React from "react";
import Chart from "react-apexcharts";
import {useState , useEffect} from 'react';
import axios from "axios";
import Connect from "./Connect";

export default function Barchart() {
  const [dat,setDat]=useState([]);
  const [loc,setLoc]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8000/api/skills").then((res)=>{
          
         // setDat(res.data.students);
         setDat(res.data.students);
         console.log(res.data.students)
         console.log(dat.values)
        //  console.log(dat);

 
         
      }).catch((err)=>{
          console.log(err);
      })
  },[])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/location").then((res)=>{
        
       // setDat(res.data.students);
       setLoc(res.data.students);
       console.log(res.data.students)
       console.log(dat.values)
      //  console.log(dat);


       
    }).catch((err)=>{
        console.log(err);
    })
},[])


  let properties=[]
  let count = []

  let location=[]
  let count1 = []
  for (var i =0 ;i <dat.length;i++){
    properties.push(dat[i].skill);
    count.push(dat[i].count)
  }

  for (i =0 ;i <loc.length;i++){
    location.push(loc[i].city);
    count1.push(loc[i].count)
  }
  console.log(properties);
  console.log(count);
  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3"></h3>

        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "Trending skills wise visualization",
              data: count,
            },
          ]}
          options={{
           
title:{
    text:"Trending skills wise visualization",
    style:{fontSize:30}
},
            subtitle: {
             
              style: { fontSize: 18 },
            },

          
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: properties,
              title: {
               
                style: { fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15" },
              },
              title: {
               
                style: {  fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                
                fontSize: 15,
              },
            },
          }}
        ></Chart>
        </div>

<div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3"></h3>

<Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "Location wise visualization",
              data: count1,
            },
          ]}
          options={{
            title:{
                text:"Location wise visualization",
                style:{fontSize:30}
            },

            subtitle: {
             
              style: { fontSize: 18 },
            },

          
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: location,
              title: {
               
                style: { fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15" },
              },
              title: {
               
                style: {  fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                
                fontSize: 15,
              },
            },
          }}
        ></Chart>

        <Connect/>
      </div>
    </React.Fragment>
  );
}

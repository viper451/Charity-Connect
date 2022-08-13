import React,{useState,useEffect} from 'react';
import Card from './Card';
import Data from './Data';
import axios from "axios"
const Works = () => {

    let [Events,setEvents]=useState("");
    


    
    // fetch("http://localhost:3006/neweventinfo")
    // .then((response) => response.json())
    // .then((data) => {
    //   setEvents(data);
    // });

    // console.log(Events)
//    console.log(typeof(Data))


    
     
    return (
        <div className="container">
            <div>
                <h4 className=" my-5 text-center">“तेरा वजूद मेरी दुआओं में हो,

मेरी हाथों की लकीरों में तू ऐसे समाये,

मैं दुआ में अमीन कहूं,

और तू मेरी हो जाये” <span className="font-weight-bold" >- Muhammad Ali</span> </h4>
     
                
            </div>
            <div className="row mt-4 justify-content-center align-items-center">
            {
                Data.map(data=> <Card data={data}></Card>)
            }         
            </div>
            {/* <div className="row mt-4 justify-content-center align-items-center">
            {
                Events.map(data=> <Card data={data}></Card>)
                
            }         
            </div> */}
        </div>
        
    );
};

export default Works;
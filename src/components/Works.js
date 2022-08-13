import React,{useState,useEffect} from 'react';
import Card from './Card';
import Data from './Data';
import NewCard from './NewCard';
import axios from "axios"
const Works = () => {

    let [Events,setEvents]=useState();
    


 
   
   

   useEffect(() => {

    fetch("http://localhost:3006/neweventinfo")
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
    });

//     console.log(Events)
//    console.log(typeof(Data))

 
 }, [Events]);
 



    
     
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
            <div className="row mt-4 justify-content-center align-items-center">
            {
                Events?.map(data=> <NewCard data={data} filename={data.fileName}></NewCard>)
                
            }         
            </div>
        </div>
        
    );
};

export default Works;
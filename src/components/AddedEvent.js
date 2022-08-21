import React, {useState,useContext, useEffect} from 'react';
import {UserContext} from '../App';
import VolunteerCard from './VolunteerCard';
import axios from 'axios'

const AddedEvent = () => {
    const [user,setUser]=useContext(UserContext);
    const [data,setData]=useState([]);
    const [numevents, setNumEvents] = useState(0);
    useEffect(() => {
    
        fetch('http://localhost:3006/task?mail='+user.mail)
            .then(response => response.json())
            .then(data => {
              
                setData(data);
            });


                    userEvents()
          
     console.log(numevents)
    }, [numevents])

    const userEvents=async ()=>{
      const variable={name:user.name}
       console.log(variable)
      
 await fetch("http://localhost:3006/numEvents",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(variable)
 })
        .then((res) =>res.json())
       .then((data,err) => {
       
        console.log(JSON.stringify(data)+" "+err);
          setNumEvents(data.statement)});

    };

    function removeWork(id){
        console.log(id);
        console.log(user.mail)
        
        fetch(`http://localhost:3006/delete/${id}?mail=`+user.mail,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(datas => {
              console.log(datas)
        });

        
        var items=data.filter(key => key._id!==id);
        console.log(items)
        setData(items);
        setNumEvents(numevents-1)
    }

    return (
        <>
        <div>
            <h4 className="text-center my-3">Added Event List for&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Events </h4>
            <h4 className="text-center my-3 text-danger">{user.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{numevents}</h4>
        </div>

        <div className="container ">
            <div className="row">
            {
                data.map(key=> <VolunteerCard userEvents={userEvents}removeWork={removeWork} datas={key}/>)
            }
            </div>
        </div>
        </>
    );
};

export default AddedEvent;
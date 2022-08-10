import React, {useState,useContext, useEffect} from 'react';
import {UserContext} from '../App';
import VolunteerCard from './VolunteerCard';
const AddedEvent = () => {
    const [user,setUser]=useContext(UserContext);
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch('http://localhost:3006/task?mail='+user.mail)
            .then(response => response.json())
            .then(data => {
              
                setData(data);
            });
    }, [])


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
    }

    return (
        <>
        <div>
            <h4 className="text-center my-3">Added Event List for </h4>
            <h4 className="text-center my-3 text-danger">{user.name}</h4>
        </div>

        <div className="container ">
            <div className="row">
            {
                data.map(key=> <VolunteerCard removeWork={removeWork} datas={key}/>)
            }
            </div>
        </div>
        </>
    );
};

export default AddedEvent;
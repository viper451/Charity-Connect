import React, { useState, useEffect } from "react";
import TableData from "./TableData";
import axios from "axios";
import swal from "sweetalert";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const onClickDelete = async (id) => {
  const variables = {
    id: id,
  };

  const response = await axios.post(
    "http://localhost:3006/deleteActivity",
    variables
  );
  swal({
    title: "DELETED VOLUNTEER!",
    text: "Deleted Successfully!",
    icon:  "success",
    dangerMode: true,
    button: false,
    timer: 850,
  });
};

const onClickUpdate = async (id,status) => {
  const variables = {
    id: id,
    status:status
  

  };
  const response = await axios.post(
    "http://localhost:3006/updateActivity",
    variables
  );
 if(status==="Accepted")
 {
  swal({
    title: "Waitlist!",
    text: "Added to waitlist Successfully!",
    icon:  "success",
    dangerMode: true,
    button: false,
    timer: 850,
  });
 }
 else{
  swal({
    title: "Accepted!",
    text: "Accepted Successfully!",
    icon:  "success",
    dangerMode: true,
    button: false,
    timer: 850,
  });
 }
};

const VolunteerList =  () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    
     fetch("http://localhost:3006/info")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [datas]);

  //  console.log(datas)

  return (
    <>
          <div className="classfontfamily">
      <b>
    Registered Volunteer List </b></div><br/><br/>
      <Table style={{ maxWidth: "1000px", "borderWidth":"0.1px", 'borderColor':"#FFFFFF", 'borderStyle':'solid' }} className="mx-auto mt-8">
        <Thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Age</th>
            <th>Location</th>           
            <th>Volunteer Work</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </Thead>
        {datas.map((key) => (
          <TableData
             onClickUpdate={onClickUpdate}
            onClickDelete={onClickDelete}
            info={key}
          />
        ))}
      </Table>
    </>
  );
};

export default VolunteerList;

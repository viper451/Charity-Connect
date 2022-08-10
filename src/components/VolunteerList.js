import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import TableData from "./TableData";
import axios from "axios";

const onClickDelete = async (id) => {
  const variables = {
    id: id,
  };

  const response = await axios.post(
    "http://localhost:3006/deleteActivity",
    variables
  );
};

const onClickUpdate = async (id) => {
  const variables = {
    id: id,
  };
  const response = await axios.post(
    "http://localhost:3006/updateActivity",
    variables
  );
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
      <h4 className="text-center mt-5">Registered Volunteer List</h4>
      <Table style={{ maxWidth: "1000px" }} className="mx-auto mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Location</th>
            <th>Volunteer Work</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        {datas.map((key) => (
          <TableData
            // onClickUpdate={onClickUpdate}
            onClickDelete={onClickDelete}
            info={key}
          />
        ))}
      </Table>
    </>
  );
};

export default VolunteerList;

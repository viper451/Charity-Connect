import React, { useState, useEffect } from "react";

import TableData from "./TableData";
import axios from "axios";
import OrganizationTableData from "./OrganizationTableData";
import swal from "sweetalert";
import "./style.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const onClickDelete = async (id) => {
  const variables = {
    id: id,
  };

await axios.post(
    "http://localhost:3006/deleteActivityOrganization",
    variables
  );
  // .then(response => {
  //     if (response.data.success) {
  //        console.log("DELETED")
  //     } else {
  //         alert('Failed to Remove From Favorites')
  //     }
  // })
  //       console.log(response)
  //        useEffect(()=>{
  //    TableData()
  //  },[information]);
  swal({
    title: "ORGNAZATION!",
    text: "Deleted Successfully!",
    icon:  "success",
    dangerMode: true,
    button: false,
    timer: 850,
  });
  
};

const OrganizationList = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3006/organizationinfo")
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
    Registered Organization List </b> <br/><br/></div>
      <Table style={{ maxWidth: "1000px", "borderWidth":"0.1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} className="mx-auto mt-6">
        <Thead>
          <tr>
       
            <th>Organization Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Volunteer Required</th>
            <th>Location</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </Thead>
        {datas.map((key) => (
          <OrganizationTableData onClickDelete={onClickDelete} info={key} />
        ))}
      </Table>
    </>
  );
};

export default OrganizationList;

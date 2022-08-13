import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import TableData from "./TableData";
import axios from "axios";
import OrganizationTableData from "./OrganizationTableData";
import swal from "sweetalert";
const onClickDelete = async (id) => {
  const variables = {
    id: id,
  };

  const response = await axios.post(
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

  // console.log(datas)

  return (
    <>
      <h4 className="text-center mt-5">Registered Organization List</h4>
      <Table style={{ maxWidth: "1000px" }} className="mx-auto mt-5">
        <thead>
          <tr>
            <th>Orgnazization Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        {datas.map((key) => (
          <OrganizationTableData onClickDelete={onClickDelete} info={key} />
        ))}
      </Table>
    </>
  );
};

export default OrganizationList;

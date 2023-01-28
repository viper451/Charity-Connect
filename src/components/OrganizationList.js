import React, { useState, useEffect } from "react";

import axios from "axios";
import OrganizationTableData from "./OrganizationTableData";
import swal from "sweetalert";
import "./style.css";
import { Table, Thead } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const OrganizationList = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3006/organizationinfo")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(datas);

  const onClickDelete = async (id) => {
    const variables = {
      id: id,
    };
    setData([]);
    await axios.post(
      "http://localhost:3006/deleteActivityOrganization",
      variables
    );
    let newOrganizationData = datas.filter((data) => data._id !== id);
    console.log(newOrganizationData);
    setData(newOrganizationData);

    swal({
      title: "ORGNAZATION!",
      text: "Deleted Successfully!",
      icon: "success",
      dangerMode: true,
      button: false,
      timer: 850,
    });
  };

  return (
    <>
      <div className="classfontfamily">
        <b style={{ textAlign: "center", color: "white" }}>
          Registered Organization List{" "}
        </b>{" "}
        <br />
        <br />
      </div>
      <Table
        style={{
          maxWidth: "1000px",
          borderWidth: "0.1px",
          borderColor: "#aaaaaa",
          borderStyle: "solid",
        }}
        className="mx-auto mt-6"
      >
        <Thead>
          <tr>
            <th style={{ textAlign: "center" }}>Organization Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Registration Date</th>
            <th style={{ textAlign: "center" }}>Volunteer Required</th>
            <th style={{ textAlign: "center" }}>Location</th>
            <th style={{ textAlign: "center" }}>Description</th>
            <th style={{ textAlign: "center" }}>Verification</th>
            <th style={{ textAlign: "center" }}>Action</th>
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

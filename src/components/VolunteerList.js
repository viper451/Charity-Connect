import React, { useState, useEffect } from "react";
import TableData from "./TableData";
import axios from "axios";
import swal from "sweetalert";
import { Table, Thead } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import userEvent from "@testing-library/user-event";
import { responsiveFontSizes } from "@material-ui/core";
import { ReportGmailerrorred } from "@mui/icons-material";

const VolunteerList = () => {
  const [datas, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3006/info")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  //     // userEvent()
  // }, [datas]);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    let response = await fetch("http://localhost:3006/info");
    response = await response.json();
    setData(response);
    // console.log(response)
  }

  console.log(datas);

  const onClickDelete = async (id) => {
    console.log(id);
    const variables = {
      id: id,
    };
    setData([]);
    await axios.post("http://localhost:3006/deleteActivity", variables);
    let newTasks = datas.filter((data) => data._id !== id);
    console.log(newTasks);
    setData(newTasks);

    swal({
      title: "DELETED VOLUNTEER!",
      text: "Deleted Successfully!",
      icon: "success",
      dangerMode: true,
      button: false,
      timer: 850,
    });
  };

  const onClickUpdate = async (id, status) => {
    const variables = {
      id: id,
      status: status,
    };

    //     let items = [...this.state.items];
    //     // 2. Make a shallow copy of the item you want to mutate
    //     let item = {...items[1]};
    //     // 3. Replace the property you're intested in
    //     item.name = 'newName';
    //     // 4. Put it back into our array. N.B. we *are* mutating the array here,
    //     //    but that's why we made a copy first
    //     items[1] = item;
    //     // 5. Set the state to our new copy
    //     this.setState({items});
    // },

    let newEntry = {
      id: id,
    };
    await axios.post("http://localhost:3006/updateActivity", variables);
    // let UpdatedData=[...datas].filter(data=>data._id===id);
    // let filterRecords=[...datas].filter(data=>data._id!==id);
    // console.log(UpdatedData)
    // filterRecords.status=filterRecords.status==="Accepted"?"Waiting":"Accepted";
    // let updatedObject = [...filterRecords, UpdatedData]
    // setData(updatedObject)

    for (var i in datas) {
      if (datas[i]._id == id) {
        datas[i].status =
          datas[i].status === "Accepted" ? "Waiting" : "Accepted";
        break; //Stop this loop, we found it!
      }
    }
    console.log(datas);
    setData([]);
    setData(datas);

    if (status === "Accepted") {
      swal({
        title: "Waitlist!",
        text: "Added to waitlist Successfully!",
        icon: "success",
        dangerMode: true,
        button: false,
        timer: 900,
      });
    } else {
      swal({
        title: "Accepted!",
        text: "Accepted Successfully!",
        icon: "success",
        dangerMode: true,
        button: false,
        timer: 900,
      });
    }
  };

  return (
    <>
      <div className="classfontfamily">
        <b style={{ textAlign: "center", color: "white" }}>
          Registered Volunteer List{" "}
        </b>
      </div>
      <br />
      <br />
      <Table
        style={{
          maxWidth: "1000px",
          borderWidth: "0.1px",
          borderColor: "#FFFFFF",
          borderStyle: "solid",
        }}
        className="mx-auto mt-8"
      >
        <Thead>
          <tr>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Registration Date</th>
            <th style={{ textAlign: "center" }}>Age</th>
            <th style={{ textAlign: "center" }}>Location</th>
            <th style={{ textAlign: "center" }}>Volunteer Work</th>
            <th style={{ textAlign: "center" }}>Verification</th>
            <th style={{ textAlign: "center" }}>Action</th>
            <th style={{ textAlign: "center" }}>Status</th>
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

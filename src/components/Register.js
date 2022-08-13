import React, { useState, useContext } from "react";
import "./style.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import Data from "./Data";
import { UserContext } from "../App";
import swal from "sweetalert";

const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [organizaiton, setOrganization] = useState(
    localStorage.getItem("name")
  );
  const [orgemail, Setorgemail] = useState(localStorage.getItem("email"));
  const { id } = useParams();

  var work = Data.filter((key) => key.id == id);
  var action = work[0];
  const current = new Date();
  const todaydate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  console.log(action.name);

  let history = useHistory();
  function saveData(event) {
    console.log("Enter volunteer");
    event.preventDefault();
    var name = document.getElementById("name").value;
    var date = todaydate;

    var mail = document.getElementById("email").value;
    var organize = document.getElementById("organize").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;

    //console.log(name+" : "+number+" : "+mail+" : "+address);
    var information = {
      name: name,
      date: date,
      mail: mail,
      description: description,
      organize: organize,
      location: location,
      status: "Waiting",
    };

    console.log(information);

    fetch("http://localhost:3006/addPeople", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          // alert("SUCCESS")
          history.push("/");
        }
      });
      swal({
        title: "REGISTER VOLUNTEER!",
        text: "Register Successfully!",
        icon:  "success",
        dangerMode: true,
        button: false,
        timer: 850,
      });
  }

  function saveDataOrganization(event) {
    console.log("Enter Organization");
    event.preventDefault();
    var name = document.getElementById("name").value;
    var date = todaydate;

    var mail = document.getElementById("email").value;
    var organize = document.getElementById("organize").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;

    //console.log(name+" : "+number+" : "+mail+" : "+address);
    var information = {
      name: name,
      date: date,
      mail: mail,
      description: description,
      organize: organize,
      location: location,
    };

    console.log(information);

    fetch("http://localhost:3006/eventinfoadd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("SUCCESS");
          history.push("/");
        }
      });
      swal({
        title: "REGISTER ORGNAIZATION!",
        text: "Register Successfully!",
        icon:  "success",
        dangerMode: true,
        button: false,
        timer: 850,
      });

  }

  return (
    <div className="container">
      <div className="register-box mx-auto">
        {organizaiton === null ? (
          <Form onSubmit={saveData}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={user.name}
                id="name"
                placeholder="Enter Name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={user.mail}
                id="email"
                placeholder="Enter Email"
                
              />
            </FormGroup>

            {/* 
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Enter Date"
                    />
                </FormGroup> */}

            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="organize">Volunteer Work</Label>
              <Input
                type="text"
                name="organize"
                value={action.name}
                id="organize"
                placeholder=""
                required
              />
            </FormGroup>

            <button className="btn btn-primary btn-custom-2">
              Registration
            </button>
          </Form>
        ) : (
          <Form onSubmit={saveDataOrganization}>
            <FormGroup>
              <Label for="name">Organization Name</Label>
              <Input
                type="text"
                name="name"
                value={organizaiton}
                id="name"
                placeholder="Enter Name"
              
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Organization Email</Label>
              <Input
                type="email"
                name="email"
                value={orgemail}
                id="email"
                placeholder="Enter Email"
             
              />
            </FormGroup>

            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                required
              />
            </FormGroup>

         

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="organize">Organization Work</Label>
              <Input
                type="text"
                name="organize"
                id="organize"
                value={action.name}
                placeholder=""
             
              />
            </FormGroup>

            <button className="btn btn-primary btn-custom-2">
              Registration
            </button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useContext } from "react";
import "./style.css";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import Data from "./Data";
import { UserContext } from "../App";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import swal from "sweetalert";

const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [datas, setData] = useState([]);
  const [organizaiton, setOrganization] = useState(
    localStorage.getItem("name")
  );
  const [orgemail, Setorgemail] = useState(localStorage.getItem("email"));
  let { id } = useParams();
  const [check, setCheck] = useState(true);
  const [verified, setVerified] = useState(false);
  // ObjectId("5e27129bcfb11e5c34d89910").toString();

  //   console.log(Country.getAllCountries())
  // console.log(State.getAllStates())

  if (check) {
    fetch("http://localhost:3006/organizationinfo")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCheck(false);
      });
  }

  var work =
    id.length > 2
      ? datas.filter((key) => key._id.toString === id.toString)
      : Data.filter((key) => key.id == id);

  var action = work[0];

  // console.log(action)

  const current = new Date();
  const todaydate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  // console.log(action.name);

  let history = useHistory();
  function saveData(event) {
    // console.log("Enter volunteer");
    event.preventDefault();
    var name = document.getElementById("name").value;
    var date = todaydate;
    var age = document.getElementById("age").value;
    var mail = document.getElementById("email").value;
    var organize = document.getElementById("organize").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var photo = document.querySelector('input[type="file"]');

    //console.log(name+" : "+number+" : "+mail+" : "+address);
    var information = {
      name: name,
      date: date,
      mail: mail,
      age: age,
      description: description,
      organize: organize,
      location: location,
      status: "Waiting",
    };

    var formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("mail", mail);
    formData.append("age", age);
    formData.append("description", description);
    formData.append("organize", organize);
    formData.append("location", location);
    formData.append("status", "Waiting");
    formData.append("photo", photo.files[0]);

    // console.log(information);
    if (information.age > 17) {
      setVerified(true);
    }
    console.log(JSON.stringify(formData));

    if (information.age > 17) {
      fetch("http://localhost:3006/addPeople", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: formData,
      })
        .then((res) => res.json())
        .then((data, err) => {
          console.log(JSON.stringify(data) + " " + err);
          if (data.data) {
            // alert("SUCCESS")
            swal({
              title: "REGISTER VOLUNTEER!",
              text: "Register Successfully!",
              icon: "success",
              dangerMode: true,
              button: false,
              timer: 900,
            });
            history.push("/");
            // window.location.href="/"

            setVerified(false);
          } else {
            alert(data.statement);
            setVerified(false);
          }
        });
    } else {
      swal({
        title: "ERROR OCCURED!",
        text: "Failed to register!",
        icon: "error",
        dangerMode: true,
        button: false,
        timer: 900,
      });
      setVerified(false);
    }
  }
  function saveDataOrganization(event) {
    console.log("Enter Organization");
    event.preventDefault();
    var name = document.getElementById("name").value;
    var date = todaydate;
    var volnumber = document.getElementById("volnumber").value;
    var mail = document.getElementById("email").value;
    var organize = document.getElementById("organize").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var photo = document.querySelector('input[type="file"]');

    //console.log(name+" : "+number+" : "+mail+" : "+address);

    var formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("mail", mail);
    formData.append("volnumber", volnumber);
    formData.append("description", description);
    formData.append("organize", organize);
    formData.append("location", location);
    formData.append("photo", photo.files[0]);

    fetch("http://localhost:3006/eventinfoadd", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: formData,
    })
      .then((res) => res.json())
      .then((data, err) => {
        console.log(data);
        if (data.data) {
          // alert("SUCCESS");
          history.push("/");
          swal({
            title: "REGISTER ORGNAIZATION!",
            text: "Register Successfully!",
            icon: "success",
            dangerMode: true,
            button: false,
            timer: 850,
          });
        } else {
          alert(data.statement);
        }
      });
  }
  // console.log(action==undefined)
  return (
    <div className="container">
      <div className="register-box mx-auto">
        {organizaiton === null ? (
          <Form onSubmit={saveData}>
            <FormGroup>
              <Label for="name" style={{ color:"white"  }}>Name 
         
               
              
              
              </Label>
              <Input
                type="text"
                name="name"
                value={user.name == undefined ? "" : user.name}
                //  onChange={e=>setDetails({...details,name:e.target.value})}
                // value="LA"
                id="name"
                placeholder="Enter Name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email" style={{ color:"white"  }}>Email</Label>
              <Input
                type="email"
                name="email"
                value={user.mail}
                id="email"
                placeholder="Enter Email"
              />
            </FormGroup>

            <FormGroup>
              <Label for="location" style={{ color:"white"  }}>
                Age <b>(Min AGE:17)</b>
              </Label>
              <Input
                type="number"
                name="age"
                id="age"
                placeholder="Enter Age"
                // onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="location" style={{ color:"white"  }}>Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="description" style={{ color:"white"  }}>Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
                
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="organize" style={{ color:"white"  }}>Volunteer Work</Label>
              <Input
                type="text"
                name="organize"
                value={id.length > 2 ? action?.description : action.name}
                //  value="sl"
                // onChange={(e) => setName(e.target.value)}
                id="organize"
                placeholder="Enter Volunteer Work"
                required
              />
            </FormGroup>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Background Verification</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* <b>Aadhar Card Pan Card Passport (Any one)</b> */}
            Please Upload any one of the following files for Verification process :-)<br />
            1.Aadhar Card <br />
            2.Pan Card  <br /> 
            3.Passport  <br />

          </Typography>
        </AccordionDetails>
      </Accordion> 
      <br />
            <FormGroup>
             
              <Input
                type="file"
                name="photo"
                accept=".png,.jpg,.jpeg"
                className="form-control-file"
                id="banner"
                //  required
              />
            </FormGroup>

            <button className="btn btn-primary btn-custom-2">
              Registration
            </button>
          </Form>
        ) : (
          <Form onSubmit={saveDataOrganization}>
            <FormGroup>
              <Label for="name" style={{ color:"white"  }}>Organization Name</Label>
              <Input
                type="text"
                name="name"
                value={organizaiton}
                id="name"
                placeholder="Enter Name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email" style={{ color:"white"  }}>Organization Email</Label>
              <Input
                type="email"
                name="email"
                value={orgemail}
                id="email"
                placeholder="Enter Email"
              />
            </FormGroup>

            <FormGroup>
              <Label for="location" style={{ color:"white"  }}>Volunteer Required </Label>
              <Input
                type="number"
                name="volnumber"
                id="volnumber"
                placeholder="Enter Number of Volunteers Required"
                // onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="location" style={{ color:"white"  }}>Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Location"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="description" style={{ color:"white"  }}>Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="organize" style={{ color:"white"  }}>Organization Work</Label>
              <Input
                type="text"
                name="organize"
                id="organize"
                value={id.length > 2 ? action?.description : action.name}
                placeholder=""
              />
            </FormGroup>
            

            <FormGroup>
              <Label for="banner" >
                Organization Verification(<b>Certificate </b>)
              </Label>
              <Input
                type="file"
                name="photo"
                accept=".png,.jpg,.jpeg"
                className="form-control-file"
                id="banner"
                //  required
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

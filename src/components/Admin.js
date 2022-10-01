import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Events from "../newimages/events.png";
import Organization from "../newimages/Org.png";
import Volunteer from "../newimages/Volunteering.png";

const Admin = () => {
  // var Event=require("../newimages/events.png");

  return (
    <div className="container">
      <div className="row mt-5 justify-content- aligleftn-items-left">
        <div
          className="card card-custom m-4"
          style={{ width: "20rem", minHeight: "25rem" }}
        >
              <div className="gradient-border">
            <Link className="admin-link" to="/volunteerlist">
          <img
            className="card-img-top"
            src={Volunteer}
            height="330px"
            alt="Card  cap"
          />
          
          <div className="card-body">
            <p className="card-text text-center ">
              {" "}
            
                VOLUNTEER
           
            </p>
          </div>
          </Link>
          </div>
        </div>
        <div
          className="card card-custom m-4"
          style={{ width: "20rem", minHeight: "25rem" }}
        >
                <div className="gradient-border">
                <Link className="admin-link" to="/organizationlist">
          <img
            className="card-img-top"
            src={Organization}
            height="330px"
            alt="Card  cap"
          />
          <div className="card-body">
            <p className="card-text text-center ">
              <p className="card-text text-center ">
                {" "}
          
                  ORGANIZATION
        
              </p>
            </p>
          </div>
          </Link>
          </div>
        </div>
        <div
          className="card card-custom m-4"
          style={{ width: "20rem", minHeight: "25rem" }}
        >
               <div className="gradient-border">
                <Link className="admin-link" to="/addevent">
          <img
            className="card-img-top"
            src={Events}
            height="330px"
            alt="Card  cap"
          />
          <div className="card-body">
            <p className="card-text text-center ">
        
                ADD EVENTS
          
            </p>
          </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

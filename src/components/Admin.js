import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Admin = () => {
  return (
    <div className="container">
      <div className="">
        <h5 className="list-unstyled mt-5">
          <Link className="admin-link" to="/volunteerlist">
            <li className="my-3 admin-link">Show All Registered Volunteer</li>
          </Link>
          <Link className="admin-link" to="/organizationlist">
            <li className="my-3 admin-link">
              Show All Registered Organization
            </li>
          </Link>
          <Link className="admin-link" to="/addevent">
            <li className="my-3 admin-link">Add New Event</li>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Admin;

import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
import charityconnect from "./logos/charityconnect.png";
import { UserContext } from "../App";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import EventIcon from "@mui/icons-material/Event";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);
  let [organizaiton, setOrganization] = useState(localStorage.getItem("name"));
  const toggle = () => setIsOpen(!isOpen);
  // console.log(organizaiton)
  // console.log(user)

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <img src={charityconnect} style={{ maxWidth: "140px" }} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div id="google_translate_element"></div>

              <NavItem>
                <NavLink>
                  <Link className="nav-custom" to="/instruction">
                    <button className="btn btn-info btn-sm">
                      About Us
                      <InfoOutlinedIcon />
                    </button>
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link className="nav-custom" to="/">
                    <button className="btn btn-warning btn-sm">
                      Home
                      <HomeIcon />
                    </button>
                  </Link>
                </NavLink>
              </NavItem>

              {user.name && (
                <NavItem>
                  <NavLink>
                    <Link className="nav-custom" to="/addedevent">
                      <button className="btn btn-info btn-sm">
                        Added Events
                        <EventIcon />
                      </button>
                    </Link>
                  </NavLink>
                </NavItem>
              )}

              {(user.name || organizaiton !== null) && (
                <NavItem>
                  <NavLink>
                    <Link className="nav-custom" to="/login">
                      <button className="btn btn-dark btn-sm">
                        {organizaiton !== null ? organizaiton : user.name}{" "}
                        <CorporateFareRoundedIcon />
                      </button>
                    </Link>
                  </NavLink>{" "}
                </NavItem>
              )}

              <NavItem>
                <NavLink>
                  <Link className="nav-custom" to="/login">
                    {!user.name && organizaiton === null && (
                      <button className="btn btn-success btn-sm">
                        Login <LoginIcon />
                      </button>
                    )}

                    {(user.name || organizaiton !== null) && (
                      <button className="btn btn-danger btn-sm">
                        Account <AccountCircleSharpIcon />
                      </button>
                    )}
                  </Link>
                </NavLink>
              </NavItem>

              {!user.name && (
                <NavLink>
                  <Link to="/newuser">
                    <button className="btn btn-primary btn-sm  ">
                      Register <HowToRegIcon />
                    </button>
                  </Link>
                </NavLink>
              )}

              {organizaiton == null && !user.name && (
                <NavLink>
                  <Link to="/loginadmin">
                    <button className="btn btn-secondary btn-sm">
                      Admin
                      <SupervisorAccountIcon />
                    </button>
                  </Link>
                </NavLink>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;

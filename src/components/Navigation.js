
import React, {useState,useContext} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link
  } from "react-router-dom";
import logo from './logos/logo.png';
import charityconnect from './logos/charityconnect.png';
import {UserContext} from '../App';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user,setUser]=useContext(UserContext);
  let [organizaiton,setOrganization]=useState(localStorage.getItem("name"))
  const toggle = () => setIsOpen(!isOpen);
  console.log(organizaiton)
  console.log(user)

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <div className="container">
        <NavbarBrand href="/">
            <img src={charityconnect} style={{maxWidth:"140px"}} />
            
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
          <div id="google_translate_element"></div>
            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/">
              <button className="btn btn-warning btn-sm">
                Home
                </button>
                </Link>
              </NavLink>
            </NavItem>

             
            {
              user.name && <NavItem>
              <NavLink>
                <Link className="nav-custom" to="/addedevent">
                <button className="btn btn-info btn-sm">
                  Added Events</button></Link>
                </NavLink>
              </NavItem>
            }

            


            


      

             
                {
                   (user.name || organizaiton!==null) && <NavItem><NavLink> 
                    <Link className="nav-custom" to="/login">
                    <button className="btn btn-dark btn-sm">
                    {organizaiton!==null?organizaiton:user.name}
                    </button>
                    </Link>
                    </NavLink> </NavItem>
                }
 


            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/login">
                {
                  (!user.name && organizaiton===null) && <button className="btn btn-success btn-sm">
                  Login
                  </button>
                }
                
                {
                  (user.name || organizaiton!==null) && <button className="btn btn-danger btn-sm">
                  Account
                  </button>
                }


                </Link>
              </NavLink>
            </NavItem>

            {
              !user.name && <NavLink>
              <Link to="/newuser">
              <button style={{width:"80px"}} className="btn btn-primary btn-sm  ">Register</button>
              </Link>
              
              </NavLink> 
            }
              
            

                {
                  (organizaiton==null && !user.name) && <NavLink>
                <Link to="/loginadmin">
                <button style={{width:"70px"}} className="btn btn-secondary btn-sm">Admin</button>
                </Link>
                </NavLink>
}
            
              
            
             
          </Nav>
 
          
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

 
export default Navigation;
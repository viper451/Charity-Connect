
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

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
        <NavbarBrand href="/">
            <img src={charityconnect} style={{maxWidth:"140px"}} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            
            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/">Home</Link>
              </NavLink>
            </NavItem>

             
            {
              user.name && <NavItem>
              <NavLink>
                <Link className="nav-custom" to="/addedevent">Added Events</Link>
                </NavLink>
              </NavItem>
            }

            


            


            


      

            


            {/* <NavItem>
              <NavLink className="nav-custom" target="_blank" href="https://github.com/zahid-bracu">GitHub</NavLink>
            </NavItem> */}

             
                {
                   (user.name || organizaiton!==null) && <NavItem><NavLink> 
                    <Link className="nav-custom" to="/login">
                    {organizaiton!==null?organizaiton:user.name}
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
              
              <NavLink>
                <Link to="/loginadmin">
                <button style={{width:"70px"}} className="btn btn-secondary btn-sm">Admin</button>
                </Link>
              </NavLink>
            
             
          </Nav>
 
          
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

 
export default Navigation;
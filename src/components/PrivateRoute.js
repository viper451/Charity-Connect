import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import {UserContext} from '../App';
function PrivateRoute({ children, ...rest }) {
      
    const [user,setUser]=useContext(UserContext);
    const [organizaiton,setOrganization]=useState(localStorage.getItem("name"))
    console.log(user);
    let values=user;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          (user.name || organizaiton!==null) ? ( //state is 
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


export default PrivateRoute;
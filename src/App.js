import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Works from "./components/Works";
import Register from "./components/Register";
import AddEvent from "./components/AddEvent";
import SelectedWorks from "./components/SelectedWorks";
import VolunteerList from "./components/VolunteerList";
import OrganizationListRegister from "./components/OrganizationListRegister";
import Organizationlistlogin from "./components/OrganizationListLogin";
// import OrganizationTableData from './components/OrganizationTableData';
import Success from "./components/Success";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin";
import AddedEvent from "./components/AddedEvent";
import Newuser from "./components/Newuser";
import AdminLogin from "./components/AdminLogin";
import OrganizationList from "./components/OrganizationList";
export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({
    name: "",
    mail: "",
  });

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/volunteerlist">
              <VolunteerList />
            </Route>

            <Route exact path="/success">
              <Success />
            </Route>

            <Route exact path="/organizationlistregister">
              <OrganizationListRegister />
            </Route>


            <Route exact path="/organizationlistlogin">
              <Organizationlistlogin />
            </Route>

           

            <Route exact path="/admin">
              <Admin />
            </Route>

            <Route exact  path="/loginadmin">
              <AdminLogin />
            </Route>

            <Route exact path="/newuser">
              <Newuser />
            </Route>

            <PrivateRoute exact path="/register/:id">
              <Register />
            </PrivateRoute>

            <PrivateRoute exact path="/register">
              <Register />
            </PrivateRoute>

            <Route exact path="/organizationlist">
              <OrganizationList />
            </Route>

            <Route exact path="/addevent">
              <AddEvent />
            </Route>

            <Route exact path="/addedevent">
              <AddedEvent />
            </Route>

            <Route exact path="/selectedworks">
              <SelectedWorks />
            </Route>

            <Route exact path="/">
              <Works />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;

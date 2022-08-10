import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";

const Newuser = () => {
  return (
    <div className="container">
      <h5 className="my-5 text-justify" style={{ maxWidth: "500px" }}>
        If you want to sign up for a volunteery work, You need to have a goolge
        account.If already have an google account.{" "}
        <Link to="login">Sign In</Link> here.
      </h5>
      <h5 className="text-center my-3">
        If you do not have.{" "}
        <a
          target="_blank"
          href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"
        >
          Sign up
        </a>{" "}
        here
      </h5>
      <h5 className="text-center my-3">
        Don't have an account?{" "}
        <Link to={"/organizationlistregister"}>Register as Organization </Link>{" "}
      </h5>
    </div>
  );
};

export default Newuser;

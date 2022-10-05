import React, { useState, useEffect,useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import "./style.css";
import { UserContext } from "../App";

import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useContext(UserContext);
  const [datas, setData] = useState([]);
  let [event, setEvent] = useState();
  const [organizaiton, setOrganization] = useState(
    localStorage.getItem("name")
  );


  
 

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/login" } };

  

  function SignInGoogle() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...

        var info = {
          name: user.displayName,
          mail: user.email,
        };
        setUser(info);

        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      console.log(user)
  }

  // useEffect(() => {
  //     countEvent()
  //     // const variables = {
  //     //     mail: user.mail,
  //     // }
  //     // console.log(variables)
  //     // event= axios.post('http://localhost:3006/countevent',variables)
  //     // console.log(event)
  //   },[event]);
  // // console.log(user)

  // countEvent

  
  return (
    <div >
      <div className="login-box mx-auto">
        <div className="mini-box">
          {!user.mail && organizaiton == null && (
            <>
              <h5 className="text-center login-text my-4 " >Login With</h5>
              <button onClick={SignInGoogle} className="btn btn-custom">
                <div className="img-logo">
                  <img
                    style={{ maxWidth: "40px" }}
                    src="https://img.icons8.com/plasticine/100/000000/google-logo.png"
                    alt=""
                  />
                </div>
                <b style={{ color:"white"  }}>Login With Google</b>
              </button>
              <p className="text-center my-3">
                Don't have an account?{" "}
                <a
                  target="_blank"
                  rel="noreferrer" 
                  href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"
                >
              <b style={{ color:"white"  }}>   Create an account</b> 
                </a>{" "}
              </p>

              <p className="text-center my-3" >
                Have an account?{" "}
                <Link to={"/organizationlistlogin"}>
              <b style={{ color:"white"  }}>  Login as Organization{" "} </b>  
                </Link>{" "}
              </p>
            </>
          )}

          {
            (user.mail || organizaiton != null) && <Logout />
            // <Logout/>
          }
        </div>
      </div>
    </div>
  );
};

const Logout = () => {
  const [user, setUser] = useContext(UserContext);
  let [organizaiton, setOrganization] = useState(localStorage.getItem("name"));

  function SignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        var info = {
          name: "",
          mail: "",
        };
        setUser(info);
      })
      .catch((error) => {
        // An error happened.
      });
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = "/";
  }
  // console.log(organizaiton)
  return (
    <>
      <h4 className="text-center">
        Welcome {!user.name ? organizaiton : user.name}
      </h4>
      <button
        onClick={SignOut}
        className="btn btn-danger btn-sm mt-5 mx-auto d-block"
      >
        Logout
      </button>
    </>
  );
};

export default Login;

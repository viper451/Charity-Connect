import { useState } from "react";
import { useHistory } from "react-router-dom";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";

function OrganizationListRegister() {
  const history = useHistory();

  const [orgnaizationname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:3006/addOrganization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgnaizationname,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      history.push("/");
    } else {
      alert(data.statement);
    }
  }

  return (
    <>
      <div className="user_card">
        <form onSubmit={registerUser}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3> REGISTER AS ORGANIZATION </h3>
          </div>
          <div className="mb-3">
            <label>
              {" "}
              <CorporateFareIcon />
              Organization Name{" "}
            </label>
            <input
              value={orgnaizationname}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Organization Name"
              required
            />
          </div>
          <div className="mb-3">
            <label>
              {" "}
              <AccountBoxIcon />
              Email{" "}
            </label>
            <input
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label>
              {" "}
              <LockIcon />
              Password
            </label>
            <input
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <br />
          <button type="submit" value="login" className="btn btn-dark">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default OrganizationListRegister;

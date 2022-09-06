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
      <div className="classfontfamily">
        <h1>REGISTER AS ORGANIZATION</h1>{" "}
      </div>
      <div className="user_card">
        <form onSubmit={registerUser}>
          <CorporateFareIcon />
          <input
            value={orgnaizationname}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Organization Name"
            required
          />
          <br />
          <AccountBoxIcon />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <LockIcon />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <br />
          <button type="submit" value="login" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default OrganizationListRegister;
